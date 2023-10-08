import Tooltip from "@/components/Tooltip";
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
    <Tooltip trigger={trigger}>
      <Description />
    </Tooltip>
  );
};

export default Tag;
