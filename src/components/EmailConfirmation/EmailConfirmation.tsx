import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";

interface EmailConfirmationProps {
  confirmationUrl: string;
  heading: string;
  body: JSX.Element;
}

const EmailConfirmation = ({
  confirmationUrl,
  heading,
  body,
}: EmailConfirmationProps) => {
  const router = useRouter();
  const { email, token } = router.query;
  const [confirmationError, setConfirmationError] = useState(false);

  useEffect(() => {
    async function confirmEmail() {
      if (!email || !token) return;

      const response = await fetch(
        `${confirmationUrl}?email=${email}&token=${token}`,
        { method: "PUT" }
      );

      const { confirmed } = await response.json();
      if (!confirmed) setConfirmationError(true);
    }

    confirmEmail();
  }, [email, token, confirmationUrl]);

  // Optimistic success UI, but show message if confirmation fails
  // This state will also occur if the token has expired (>30min)
  if (confirmationError) {
    heading = "Looks like email confirmation is incomplete";
    body = (
      <>
        Check your email for another confirmation link. If that still doesn't
        work I'll get a notification of the error, but please feel free to email
        me directly at pete@petemillspaugh.com so I can sort things out quickly.
        Thanks!
      </>
    );
  }

  return (
    <StyledWrapper data-pagefind-ignore>
      <h1 key={`${String(confirmationError)}-heading`}>{heading}</h1>
      <p key={`${String(confirmationError)}-body`}>{body}</p>
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
