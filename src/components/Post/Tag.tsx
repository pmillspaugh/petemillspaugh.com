import Popover from "@/components/Popover";
import { PostFormat, PostStatus } from "./types";
import { LABEL_TO_DESCRIPTION } from "./Description";

const Tag = ({
  label,
  trigger,
}: {
  label: PostFormat | PostStatus;
  trigger: JSX.Element;
}) => {
  const Description = LABEL_TO_DESCRIPTION[label];

  return (
    <Popover trigger={trigger}>
      <Description />
    </Popover>
  );
};

export default Tag;
