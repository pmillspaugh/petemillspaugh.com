import * as RadixDialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import styled, { keyframes } from "styled-components";

const Dialog = ({
  open,
  onOpenChange,
  srTitle,
  srDescription,
  trigger,
  children,
}: {
  open: boolean;
  onOpenChange: () => void;
  srTitle: string;
  srDescription: string;
  trigger: JSX.Element;
  children: JSX.Element;
}) => (
  <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
    <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
    <RadixDialog.Portal>
      <Overlay />
      <Content>
        <VisuallyHidden asChild>
          <RadixDialog.Title>{srTitle}</RadixDialog.Title>
        </VisuallyHidden>
        <VisuallyHidden asChild>
          <RadixDialog.Description>{srDescription}</RadixDialog.Description>
        </VisuallyHidden>
        {children}
        <Close asChild>
          <button>
            <VisuallyHidden>Close search menu</VisuallyHidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </Close>
      </Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Overlay = styled(RadixDialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  animation: ${fadeIn} 300ms ease-in-out;

  &[data-state="closed"] {
    animation: ${fadeOut} 300ms ease-in-out;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -100%) scale(0.90);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Content = styled(RadixDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  background-color: var(--white);
  border: 2px solid var(--black);
  border-radius: 4px;
  padding: 16px;
  animation: ${slideIn} 300ms ease-out;
`;

const Close = styled(RadixDialog.Close)`
  all: unset;

  position: absolute;
  top: 16px;
  right: 16px;
  height: 37px;
  width: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--black);
  border-radius: 4px;

  &:focus {
    outline: revert;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Dialog;
