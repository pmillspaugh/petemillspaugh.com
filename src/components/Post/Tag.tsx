import Tooltip from "@/components/Tooltip";
import {
  PostFormat,
  PostFormatDescription,
  PostStatus,
  OuterWrapper,
  InnerWrapper,
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

export default Tag;
