import styled from "styled-components";
import Spacer from "./Spacer";
import Divider from "./Divider";

const PageHeader = ({ page }) => {
  return (
    <>
      <Spacer size="30px" />
      <Heading>{page}</Heading>
      <Spacer size="24px" />
      <Divider />
      <Spacer size="36px" />
    </>
  );
};

const Heading = styled.h1`
  font-size: 2.5rem;
  color: ${(p) => p.theme.headingColor};
`;

export default PageHeader;
