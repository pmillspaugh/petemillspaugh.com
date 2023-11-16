import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import VisuallyHidden from "@/components/VisuallyHidden";
import ValTownLogo from "./ValTownLogo";
import useDebounce from "@/hooks/useDebounce.hook";

const GET_URL = "https://petermillspaugh-getValTownButtonClicks.web.val.run";
const SET_URL = "https://petermillspaugh-setValTownButtonClicks.web.val.run";
const INTERVAL = 1000;
const TIMEOUT = 10000;

const ValTownButton = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [valTownButtonClicks, setValTownButtonClicks] = useState("");

  const ref = useRef<HTMLElement>(null);

  // TODO: could move to RSC with Suspense + Streaming SSR
  // so that the count is streamed in on load rather than extra round trip
  async function getValTownButtonClicks() {
    const response = await fetch(GET_URL);
    const { valTownButtonClicks } = await response.json();
    setValTownButtonClicks(valTownButtonClicks);
    setLoading(false);
  }

  const incrementValTownButtonClicks = useDebounce(async () => {
    setLoading(true);
    const response = await fetch(SET_URL, { method: "POST" });
    const { valTownButtonClicks } = await response.json();
    setValTownButtonClicks(valTownButtonClicks);
    setLoading(false);

    // Refresh the Val Town iframes to sync with the VT button
    let iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < iframes.length; i++) {
      let iframe = iframes[i];
      iframe.src = iframe.src;
    }
  }, 250);

  useEffect(() => {
    getValTownButtonClicks(); // initial fetch

    let intervalId;
    let timeoutId;

    // Clear polling if the Val Town Button is not in view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        intervalId = setInterval(() => getValTownButtonClicks(), INTERVAL);
        timeoutId = setTimeout(() => clearInterval(intervalId), TIMEOUT);
      } else {
        setVisible(false);
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clear polling if the browser tab is not active
    function handleVisibilityChange() {
      if (document.hidden) {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      } else {
        if (visible) {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
          intervalId = setInterval(() => getValTownButtonClicks(), INTERVAL);
          timeoutId = setTimeout(() => clearInterval(intervalId), TIMEOUT);
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clear polling after TIMEOUT ms of inactivity
    function resetInactivityTimeout() {
      clearInterval(intervalId);
      clearTimeout(timeoutId);

      if (visible) {
        intervalId = setInterval(() => getValTownButtonClicks(), INTERVAL);
        timeoutId = setTimeout(() => clearInterval(intervalId), TIMEOUT);
      }
    }

    document.addEventListener("click", resetInactivityTimeout);
    document.addEventListener("mousemove", resetInactivityTimeout);
    document.addEventListener("scroll", resetInactivityTimeout);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("click", resetInactivityTimeout);
      document.removeEventListener("mousemove", resetInactivityTimeout);
      document.removeEventListener("scroll", resetInactivityTimeout);
    };
  }, [ref, visible]);

  return (
    <StyledArticle ref={ref}>
      <StyledButton onClick={incrementValTownButtonClicks}>
        <VisuallyHidden>Increment Val Town Button counter</VisuallyHidden>
        <span>
          <ValTownLogo />
        </span>
      </StyledButton>
      <StyledDiv key={valTownButtonClicks} loading={loading}>
        <span>{valTownButtonClicks}</span>
      </StyledDiv>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  margin: 48px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledButton = styled.button`
  position: relative;
  padding: 0;
  border: 2px solid ${(p) => p.theme.textColor};
  border-radius: 6px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top: 3px solid ${(p) => p.theme.textColor};
  background: ${(p) => p.theme.textColor};
  outline-offset: 4px;
  cursor: pointer;

  & > span {
    position: relative;
    display: block;
    background: ${(p) => p.theme.textColor};
    border: 2px solid ${(p) => p.theme.textColor};
    border-top-width: 2.5px;
    border-radius: 5px;
    will-change: transform;
    transform: translateY(-3px);
    transition: transform var(--base-timing) ease-in-out;
  }

  &:hover > span {
    transform: translateY(-4px);
    transition: transform var(--fast-timing) ease-in-out;
  }

  &:active > span {
    transform: translateY(-1px);
    transition: transform var(--fast-timing) ease-in-out;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

interface StyledDivProps {
  loading: boolean;
}

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledDiv = styled.span.withConfig({
  shouldForwardProp: (prop) => !["loading"].includes(prop),
})<StyledDivProps>`
  & > span {
    opacity: ${(p) => (p.loading ? 0 : 1)};
    transition: opacity var(--base-timing) ease-in-out;
    animation: ${fadeIn} var(--slow-timing) ease-in-out;
  }

  /* TODO: transitioning width for unknown max num of digits */
  min-width: 56px;
  height: 48px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.textColor};
  border-radius: 4px;
  color: ${(p) => p.theme.primaryBg};
  font-size: 1.35rem;
  font-family: var(--font-mono), monospace;
  font-weight: 900;
`;

export default ValTownButton;
