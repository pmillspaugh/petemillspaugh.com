import * as RadixSelect from "@radix-ui/react-select";
import styled from "styled-components";
import ChevronDownIcon from "./ChevronDownIcon";

interface SelectProps {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  items: string[];
}

const Select = ({ placeholder, value, onValueChange, items }: SelectProps) => {
  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <StyledTrigger>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </StyledTrigger>

      <RadixSelect.Portal>
        <StyledSelectContent position="popper">
          <RadixSelect.Viewport>
            {items.map((item) => (
              <StyledItem key={item} value={item}>
                <RadixSelect.ItemText>{item}</RadixSelect.ItemText>
              </StyledItem>
            ))}
            <StyledSeparator />
            <StyledResetItem value={undefined}>Reset</StyledResetItem>
          </RadixSelect.Viewport>
          <RadixSelect.Arrow />
        </StyledSelectContent>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

const StyledTrigger = styled(RadixSelect.Trigger)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7px 8px 5px 8px;
  background-color: ${(p) => p.theme.primaryBg};
  border: 1px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--font-mono);

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.tagBorderColorHover};
    border: 1px solid ${(p) => p.theme.tagBorderColorHover};
  }
`;

const StyledSelectContent = styled(RadixSelect.Content)`
  padding: 4px;
  background-color: ${(p) => p.theme.primaryBg};
  border: 1px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
`;

const StyledSeparator = styled(RadixSelect.Separator)`
  height: 1px;
  background-color: ${(p) => p.theme.textColor};
  margin: 4px;
`;

const StyledItem = styled(RadixSelect.Item)`
  padding: 4px;
  border-radius: 2px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--font-mono);

  &:hover {
    cursor: pointer;
  }

  &[data-highlighted] {
    outline: none;
    background-color: var(--green);
    color: var(--white);
  }
`;

const StyledResetItem = styled(StyledItem)`
  font-family: var(--font-open-sans);
  font-style: italic;
  font-size: 0.875rem;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export default Select;
