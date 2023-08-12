import styled from "styled-components";
import Footer from "./Footer";
import Header, { HeaderProps } from "./Header";

interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
}

const Layout = ({ lightMode, setLightMode, children }: LayoutProps) => {
  return (
    <div style={{ height: "100%" }}>
      <FlexContainer>
        <Header lightMode={lightMode} setLightMode={setLightMode} />
        <MaxWidthWrapper>
          <main>{children}</main>
        </MaxWidthWrapper>
        <Footer />
      </FlexContainer>
    </div>
  );
};

const FlexContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MaxWidthWrapper = styled.div`
  min-height: 400px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (min-width: 592px) {
    width: 520px;
  }

  @media (min-width: 768px) {
    width: 660px;
  }

  @media (min-width: 992px) {
    width: 848px;
  }

  @media (min-width: 1200px) {
    width: 1020px;
  }
`;

export default Layout;
