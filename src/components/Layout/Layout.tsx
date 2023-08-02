import styled from "styled-components";
import Header, { HeaderProps } from "./Header";
import Footer from "./Footer";

interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
}

const Layout = ({ lightMode, setLightMode, children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <MaxWidthWrapper>
        <main>{children}</main>
      </MaxWidthWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  background-color: ${(p) => p.theme.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MaxWidthWrapper = styled.div`
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
