import { useState } from "react";
import styled, { keyframes } from "styled-components";
import VisuallyHidden from "@/components/VisuallyHidden";

const SEND_VERIFICATION_URL = "https://garden.val.run/send-verification";

const EmailSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    const response = await fetch(SEND_VERIFICATION_URL, {
      method: "POST",
      body: formData,
    });

    const { success } = await response.json();
    if (success) {
      setLoading(false);
      setSuccess(true);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {success ? (
        <StyledConfirmation>
          Check your email to confirm. Thanks!
        </StyledConfirmation>
      ) : (
        <>
          <VisuallyHidden>
            <label htmlFor="name">First name</label>
          </VisuallyHidden>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="First name"
            required={true}
          />
          <VisuallyHidden>
            <label htmlFor="email">Email</label>
          </VisuallyHidden>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required={true}
          />
        </>
      )}
      <button type="submit" disabled={loading || success}>
        Subscribe
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > input {
    width: 166px;
    border: none;
    border-bottom: 1.5px solid var(--white);
    background: var(--dark-green);
    font-family: var(--font-mono), monospace;
    font-size: 0.8em;
    text-align: right;
    outline-offset: 4px;

    &::placeholder {
      color: var(--white);
      opacity: 0.75;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }

  @media (min-width: 592px) {
    & > input {
      text-align: left;
    }
  }

  & > button {
    width: 166px;
    margin-top: 8px;
    color: var(--white);
    background: var(--dark-green);
    border: 1.5px solid var(--white);
    border-radius: 4px;
    font-family: var(--font-mono), monospace;
    font-size: 0.8em;
    font-weight: 700;
    cursor: pointer;
    transition: all var(--fast-timing) ease-in-out;

    &:not(:disabled):hover {
      background: var(--white);
      border: 1.5px solid var(--white);
      color: var(--dark-green);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledConfirmation = styled.p`
  width: 166px;
  height: 63px;
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1.5px dashed var(--white);
  border-radius: 4px;
  font-family: var(--font-mono), monospace;
  font-size: 0.8rem;
  font-weight: 700;
  animation: ${fadeIn} var(--slow-timing) ease-in-out;
`;

export default EmailSignup;
