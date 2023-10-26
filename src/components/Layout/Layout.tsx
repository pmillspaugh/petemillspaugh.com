import { useRouter } from "next/router";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CommandBar from "@/components/CommandBar";
import SearchIcon from "./SearchIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // Note: navigator.platform is deprecated, but fallback to isWindows=false is ok
  const isWindows =
    typeof navigator !== "undefined" &&
    navigator.platform.toLowerCase().includes("win");

  return (
    <div style={{ height: "100%" }}>
      <FlexContainer>
        <Header />
        <MaxWidthWrapper>
          <main>{children}</main>
        </MaxWidthWrapper>
        <Footer />
      </FlexContainer>
      {router.pathname !== "/" && (
        <CommandBar>
          <StyledTrigger>
            <VisuallyHidden>Search and explore</VisuallyHidden>
            <StyledShortcut>
              <span>{isWindows ? "⌃" : "⌘"}</span>
              <span>K</span>
            </StyledShortcut>
            <StyledIconWrapper>
              <SearchIcon />
            </StyledIconWrapper>
          </StyledTrigger>
        </CommandBar>
      )}
    </div>
  );
};

const FlexContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MaxWidthWrapper = styled.div`
  flex-grow: 1;
  /* Vertically fill the space between the header and footer */
  min-height: calc(100vh - 300px - 72px);
  display: flex;
  padding: 16px;

  main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 592px) {
    width: 592px;
  }

  @media (min-width: 768px) {
    width: 660px;
    /* Vertically fill the space between the header and footer */
    min-height: calc(100vh - 393px - 72px);
  }

  @media (min-width: 1512px) {
    /* Vertically fill the space between the header and footer */
    min-height: calc(100vh - calc(100vw * 393 / 1512) - 72px);
  }
`;

const StyledTrigger = styled.button`
  all: unset;

  position: fixed;
  bottom: 16px;
  right: 16px;
  height: 32px;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.primaryBg};
  border: 2px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
  outline: 2px solid ${(p) => p.theme.tagBorderColor};

  @media (min-width: 768px) {
    padding: 8px;
  }

  &:focus {
    outline: revert;
    outline-offset: 4px;
  }

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.linkTextColor};
    border-color: ${(p) => p.theme.linkTextColor};
  }
`;

const StyledShortcut = styled.div`
  display: none;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;

  @media (min-width: 768px) {
    display: flex;
    gap: 4px;
  }

  & > span {
    padding: 0px 4px;
    border: 1.5px solid ${(p) => p.theme.textColor};
    border-radius: 2px;
  }

  button:hover > & > span {
    border: 1.5px solid ${(p) => p.theme.linkTextColor};
  }
`;

const StyledIconWrapper = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;

export default Layout;
