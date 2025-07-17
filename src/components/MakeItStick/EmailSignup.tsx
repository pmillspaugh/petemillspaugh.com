import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

const SEND_VERIFICATION_URL =
  "https://petermillspaugh-emailCourseCreator.web.val.run/send-verification";

const MakeItStickEmailSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    setSuccess(true); // optimistic success UI. I will get VT error notifications
    await fetch(SEND_VERIFICATION_URL, {
      method: "POST",
      body: formData,
    });
  }

  return (
    <>
      <StyledH1>Make It Stick (in 10 days, via email)</StyledH1>
      <StyledP>
        I’m making an email-based course on{" "}
        <em>
          <a href="https://www.goodreads.com/book/show/18770267-make-it-stick">
            Make It Stick
          </a>
        </em>
        , a book about effective learning grounded in cognitive psychology
        research.
      </StyledP>
      <StyledP>
        It’s 10 lessons, delivered over 10 days. The course is a
        work-in-progress, so the content is incomplete, but feel free to sign up
        and lmk what you think.
      </StyledP>
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
        <button type="submit" disabled={success}>
          Subscribe
        </button>
      </StyledForm>
      <StyledP>
        I’m also writing about{" "}
        <Link href="/email-course-creator">
          the <em>how</em> of making the course
        </Link>
        , which I designed to be easily copied by anyone who knows some
        JavaScript and wants to make an email-based course.
      </StyledP>
      <StyledP>
        As a disclaimer, I am not a learning expert. I like to learn, and I like
        learning about learning. This course is a distillation of{" "}
        <em>Make It Stick</em>, supported by some follow-up research I did. It's
        meant to spread the word about effective, research-backed learning
        techniques, and it's also a way for me to strengthen what I learned from
        the book.
      </StyledP>
    </>
  );
};

const StyledH1 = styled.h1`
  margin-top: 16px;
  margin-bottom: 24px;
  margin-left: -1px;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 16px;
  }
`;

const StyledP = styled.p`
  margin-bottom: 16px;
  text-wrap: pretty;

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-bottom: 24px;
  }
`;

const StyledForm = styled.form`
  padding-top: 16px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono), monospace;
  font-size: 0.875rem;

  @media (min-width: 1200px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }

  & > input {
    width: 200px;
    padding: 4px;
    border: 1.5px solid ${(p) => p.theme.textColor};
    border-radius: 4px;
    background-color: ${(p) => p.theme.primaryBg};
    text-align: center;
    outline-offset: 4px;
  }

  & > button {
    width: 200px;
    color: var(--white);
    background-color: var(--green);
    border: 1.5px solid var(--black);
    border-radius: 4px;
    padding: 4px;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: all var(--base-timing) ease-in-out;

    &:not(:disabled):hover {
      background: var(--gold);
      color: var(--black);
    }
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledConfirmation = styled.p`
  width: 200px;
  height: 76px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 2px dashed var(--green);
  border-radius: 4px;
  font-weight: 0.875rem;
  font-family: inherit;
  font-weight: 700;
  animation: ${fadeIn} var(--base-timing) ease-in-out;
`;

export default MakeItStickEmailSignup;
