import * as RadixTooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";

const Tooltip = ({
  trigger,
  children,
}: {
  trigger: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>
        <TriggerButton>{trigger}</TriggerButton>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <Content side="bottom" sideOffset={4}>
          <InnerContent>{children}</InnerContent>
        </Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

const TriggerButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: help;
  }
`;

const Content = styled(RadixTooltip.Content)`
  max-width: 300px;
  border-radius: 4px;
  border: 1px solid var(--black);
  background-color: ${(p) => p.theme.tooltipBorderColor};
  padding: 3px;
  transform-origin: var(--radix-tooltip-content-transform-origin);
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
  background-color: ${(p) => p.theme.tooltipBg};
`;

export default Tooltip;
