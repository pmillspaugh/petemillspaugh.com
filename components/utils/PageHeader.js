import styled from 'styled-components';
import Image from 'next/image';
import mountainsIcon from '../../public/images/mountainsIcon.png';
import Spacer from './Spacer';
import Divider from './Divider';

const PageHeader = ({ page }) => {
  return (
    <>
      <Spacer size='24px' />
      <ImageWrapper>
        <Image
          src={mountainsIcon}
          alt='Graphic of two snow-capped mountains with pine trees'
        />
      </ImageWrapper>
      <Spacer size='30px' />
      <Heading>{page}</Heading>
      <Spacer size='24px' />
      <Divider />
      <Spacer size='36px' />
    </>
  );
};

const ImageWrapper = styled.div`
  width: 250px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: ${(p) => p.theme.headingColor};
`;

export default PageHeader;
