import styled from "styled-components";
import Tooltip from "@/components/Tooltip";
import {
  PostFormat,
  PostFormatDescription,
  PostStatus,
} from "@/components/Garden";
import { LABEL_TO_DESCRIPTION } from "./Description";

const Tag = ({ label }: { label: PostFormat | PostStatus }) => {
  const Description = LABEL_TO_DESCRIPTION[label];

  return (
    <Tooltip
      trigger={
        <OuterWrapper>
          <InnerWrapper>{PostFormatDescription[label] ?? label}</InnerWrapper>
        </OuterWrapper>
      }
    >
      <Description />
    </Tooltip>
  );
};

const OuterWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid var(--black);
  padding: 3px;
  background-color: ${(p) => p.theme.tagBorderColor};
  transition: background-color var(--base-timing) ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.tagBorderColorHover};
  }
`;

const InnerWrapper = styled.div`
  padding: 2px 8px;
  border-radius: 2px;
  border: 1px solid var(--black);
  background-color: ${(p) => p.theme.primaryBg};
  transition: background-color var(--base-timing) ease-in-out;
  font-family: var(--font-open-sans);
  font-size: 0.875rem;
  font-weight: 700;
`;

export default Tag;
