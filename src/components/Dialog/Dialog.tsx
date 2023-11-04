import * as RadixDialog from "@radix-ui/react-dialog";
import VisuallyHidden from "@/components/VisuallyHidden";
import styled, { keyframes } from "styled-components";
import CloseIcon from "./CloseIcon";

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
        <VisuallyHidden>
          <RadixDialog.Title>{srTitle}</RadixDialog.Title>
        </VisuallyHidden>
        <VisuallyHidden>
          <RadixDialog.Description>{srDescription}</RadixDialog.Description>
        </VisuallyHidden>
        {children}
        <Close asChild>
          <button>
            <VisuallyHidden>Close search menu</VisuallyHidden>
            <CloseIcon />
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
  background-color: ${(p) => p.theme.primaryBg};
  border: 2px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
  padding: 16px;
  animation: ${slideIn} 300ms ease-out;
  overflow-y: auto;
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
  border: 2px solid transparent;

  &:focus {
    outline: revert;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Dialog;
