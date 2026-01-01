import * as RadixPopover from "@radix-ui/react-popover";
import styled from "styled-components";

const Popover = ({
  trigger,
  children,
}: {
  trigger: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <TriggerButton>{trigger}</TriggerButton>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <Content side="bottom" sideOffset={4} collisionPadding={16}>
          <InnerContent>{children}</InnerContent>
        </Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

const TriggerButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled(RadixPopover.Content)`
  max-width: min(400px, calc(100vw - 32px));
  border-radius: 4px;
  border: 1px solid var(--black);
  background-color: ${(p) => p.theme.popoverBorderColor};
  padding: 3px;
  transform-origin: var(--radix-popover-content-transform-origin);
  animation: scaleIn var(--base-timing) ease-out;

  &[data-state="closed"] {
    animation: scaleOut var(--base-timing) ease-out;
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
`;

const InnerContent = styled.div`
  border-radius: 4px;
  border: 1px solid var(--black);
  padding: 12px 16px;
  background-color: ${(p) => p.theme.popoverBg};
`;

export default Popover;
