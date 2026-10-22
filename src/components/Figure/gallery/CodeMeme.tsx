import Figure from "../Figure";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const CodeMeme = () => {
  return (
    <Figure caption="">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/code-meme.avif"
            alt="Text message conversation of a programmer talking to a non-programmer friend. The non-programmer thinks that ChatGPT has made a website but sends the URL localhost:3000."
            width={800}
            height={450}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default CodeMeme;
