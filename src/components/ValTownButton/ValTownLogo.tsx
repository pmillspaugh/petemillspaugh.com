import styled from "styled-components";

const ValTownLogo = () => {
  return (
    <StyledSvg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <path d="M48 0H0V48H48V0Z" />

      {/* VT text */}
      <path d="M31.8033 32.5201C30.9397 32.5201 30.2394 32.2519 29.7023 31.715C29.1647 31.1784 28.8964 30.4608 28.8964 29.5634V22.1712H27.1638V19.4256H28.8964V15.3599H32.2259V19.4256H35.8201V22.1712H32.2259V28.9824C32.2259 29.5104 32.4726 29.7746 32.9661 29.7746H35.5029V32.5201H31.8033Z" />
      <path d="M24.5234 20.9188L18.9876 30.092H18.5119V21.432C18.5119 20.3242 17.6131 19.4263 16.5043 19.4263H15.1821V30.361C15.1821 31.5538 16.1503 32.521 17.3443 32.521H19.6075C20.8075 32.521 21.9165 31.8817 22.5168 30.8434L29.1196 19.4263H27.1684C26.086 19.4263 25.0824 19.9925 24.5234 20.9188Z" />
      <path d="M11.9995 19.4263H15.3362V22.1721H11.9995V19.4263Z" />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  border-radius: 5px;

  & > path:first-child {
    fill: ${(p) => p.theme.vtLogoBg};
  }

  & > path:not(:first-child) {
    fill: ${(p) => p.theme.vtLogoColor};
  }
`;

export default ValTownLogo;
