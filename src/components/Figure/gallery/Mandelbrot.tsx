import Figure from "../Figure";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const Mandelbrot = () => {
  return (
    <Figure caption="2d Mandelbrot set">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/mandel.png"
            alt="Mandelbrot plot"
            width={400}
            height={300}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default Mandelbrot;
