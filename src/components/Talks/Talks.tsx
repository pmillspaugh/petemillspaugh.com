import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import accessibilityThumbnail from "@/images/accessibilityThumbnail.png";

const Talks = () => {
  return (
    <>
      <h1>Talks</h1>
      <TalkWrapper>
        <TalkBlurb>
          <ThumbnailandHeadingWrapper>
            <div>
              <Link href="/talks/accessibility" passHref legacyBehavior>
                <TalkLink>Web Accessibility for Frontend Developers</TalkLink>
              </Link>
              <Link
                href="/talks/accessibility#transcript"
                passHref
                legacyBehavior
              >
                <TranscriptLink>Read transcript →</TranscriptLink>
              </Link>
            </div>
            <ThumbnailWrapper>
              <Image
                width={1920}
                height={1080}
                src={accessibilityThumbnail}
                alt="Cover slide of Peter's talk on Web Accessibility"
                style={{ height: "auto", borderRadius: "8px" }}
              />
            </ThumbnailWrapper>
          </ThumbnailandHeadingWrapper>
        </TalkBlurb>
      </TalkWrapper>
    </>
  );
};

const TalkWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TalkBlurb = styled.article`
  flex-basis: 100%;
  max-width: 800px;
  padding: 36px;
  background-color: ${(p) => p.theme.secondaryBg};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: 8px;
`;

const TalkLink = styled.a`
  font-size: 1.5rem;
`;

const TranscriptLink = styled.a`
  display: block;
  margin-top: 8px;
  text-decoration: none;
  color: ${(p) => p.theme.textColor};

  &:hover {
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

const ThumbnailandHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ThumbnailWrapper = styled.div`
  max-width: 300px;
  line-height: 0;
`;

export default Talks;
