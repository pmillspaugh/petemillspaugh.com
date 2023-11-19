import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";

const CONFIRMATION_URL =
  "https://petermillspaugh-emailSubscription.web.val.run/confirm-verification";

const EmailConfirmation = () => {
  const router = useRouter();
  const { email, token } = router.query;
  const [isConfirmed, setIsConfirmed] = useState(false);

  // TODO: could use Suspense loading UI
  useEffect(() => {
    async function confirmEmail() {
      if (!email || !token) return;

      const response = await fetch(
        `${CONFIRMATION_URL}?email=${email}&token=${token}`,
        {
          method: "PUT",
        }
      );

      const { confirmed } = await response.json();
      if (confirmed) setIsConfirmed(true);
    }

    confirmEmail();
  }, [email, token]);

  let heading = "Confirming your email...";
  let body = (
    <>
      Try checking your email for another confirmation link—the previous one may
      have expired.
    </>
  );

  if (email && token && isConfirmed) {
    heading = "You’re all set!";
    body = (
      <>
        I’ll send emails monthly-ish with things I write. In the meantime, you
        can read about <Link href="/silly-tlds">Silly TLDs</Link>,{" "}
        <Link href="/edison-bulb">Edison bulb night mode</Link>,{" "}
        <Link href="/map-in-the-woods">
          Downloading a 30MB map in the woods
        </Link>
        , or just wander through <Link href="/garden">the garden</Link>.
      </>
    );
  }

  return (
    <StyledWrapper data-pagefind-ignore>
      <h1 key={`${String(isConfirmed)}-heading`}>{heading}</h1>
      <p key={`${String(isConfirmed)}-body`}>{body}</p>
    </StyledWrapper>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1 {
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 24px;
  }

  @media (min-width: 1200px) {
    & > p {
      font-size: 1.25rem;
      line-height: 1.75;
    }
  }

  & > h1,
  & > p {
    animation: ${fadeIn} var(--slow-timing) ease-in-out;
  }
`;

export default EmailConfirmation;
