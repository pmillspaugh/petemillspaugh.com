import styled from "styled-components";
import P from "@/components/P";
import VisuallyHidden from "@/components/VisuallyHidden";

const MEMBRANE_FEEDBACK_API_URL =
  "https://studio-878-reserve-690-drawer-792-hat.hook.membrane.io";

const Feedback = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const feedback = formData.get("feedback") as string;
    const url = window.location.href;

    try {
      const response = await fetch(MEMBRANE_FEEDBACK_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, feedback, url }),
      });
      const data = await response.json();
      console.log(data);
      form.reset();
    } catch (error) {
      console.error(error); // TODO: handle error and success
    }
  }

  return (
    <>
      <StyledH2>Reply</StyledH2>
      <P>
        Respond with your thoughts, feedback, corrections, or anything else
        you’d like to share. Leave your email if you’d like a reply. Thanks for
        reading.
      </P>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="feedback">
          <VisuallyHidden>Your thoughts</VisuallyHidden>
          <textarea
            name="feedback"
            id="feedback"
            placeholder="These pretzels are making me thirsty..."
            required={true}
          />
        </label>
        <div>
          <label htmlFor="email">
            <VisuallyHidden>Your email address</VisuallyHidden>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="bonnie@nardi.co"
            />
          </label>
          <button type="submit">Send</button>
        </div>
      </StyledForm>
    </>
  );
};

const StyledH2 = styled.h2`
  margin-top: 16px;
  margin-bottom: 8px;
  font-family: var(--font-open-sans);
  font-weight: 600;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 8px;

  @media (min-width: 1200px) {
    font-size: 1.25rem;
  }

  & textarea {
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 8px;
    border: 1.5px solid ${(p) => p.theme.textColor};
    border-radius: 4px;
    background-color: ${(p) => p.theme.primaryBg};
  }

  & > div {
    display: flex;
    gap: 8px;

    & > label {
      flex-grow: 2;

      & > input {
        width: 100%;
        padding: 8px;
        border: 1.5px solid ${(p) => p.theme.textColor};
        border-radius: 4px;
        background-color: ${(p) => p.theme.primaryBg};
      }
    }

    & > button {
      flex-grow: 1;
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 0.875rem;
      color: ${(p) => p.theme.primaryBg};
      background-color: ${(p) => p.theme.linkTextColor};
      border: 1.5px solid ${(p) => p.theme.textColor};
      border-radius: 4px;
      transition: all var(--base-timing);

      &:hover {
        cursor: pointer;
        color: ${(p) => p.theme.textColor};
        background-color: ${(p) => p.theme.linkTextColorHover};
      }

      @media (min-width: 1200px) {
        font-size: 1.125rem;
      }
    }
  }
`;

export default Feedback;
