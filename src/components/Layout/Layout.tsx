import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ height: "100%" }}>
      <FlexContainer>
        <Header />
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
  flex-grow: 1;
  /* Vertically fill the space between the header and footer */
  min-height: calc(100vh - 300px - 72px);
  display: flex;
  padding: 16px;

  main {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 592px) {
    width: 520px;
  }

  @media (min-width: 768px) {
    width: 660px;
    /* Vertically fill the space between the header and footer */
    min-height: calc(100vh - 393px - 72px);
  }

  @media (min-width: 1512px) {
    /* Vertically fill the space between the header and footer */
    min-height: calc(100vh - calc(100vw * 393 / 1512) - 72px);
  }
`;

export default Layout;
