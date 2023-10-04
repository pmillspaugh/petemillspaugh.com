import Link from "next/link";
import styled from "styled-components";
import { PostFormat } from "@/components/Post";

const About = () => {
  return (
    <>
      <StyledH1>About</StyledH1>
      <StyledH2>Me</StyledH2>
      <StyledP>
        I'm Pete. I'm a web developer based in Brooklyn, New York. I currently
        work at SeedFi, now{" "}
        <a
          href="https://www.intuit.com/company/press-room/press-releases/2022/intuit-to-acquire-financial-health-startup-seedfi/"
          target="_blank"
        >
          part of Credit Karma.
        </a>
      </StyledP>
      <StyledP>
        I am a dev who likes to design and write. My bread 'n butter is
        TypeScript/JavaScript, React, Node, and SQL. In the near-ish term I'd
        like to learn Rust and Three.js,{" "}
        <Link href="/wishlist" target="_blank">
          among other things
        </Link>
        . When I'm not coding I like to write, cook, draw, climb, and run.
      </StyledP>
      <StyledH2 id="this-site">My digital garden</StyledH2>
      <StyledP>
        This website is a digital garden, which is a bit different than a blog
        where each post is a "finished" work ready for public eyes. Instead,
        writing is made public early on while it's still being cultivated and
        growing.
      </StyledP>
      <StyledP>
        I owe most of my gardening inspiration to Maggie Appleton for{" "}
        <a href="https://maggieappleton.com/" target="_blank">
          her amazing digital garden
        </a>{" "}
        and{" "}
        <a href="https://maggieappleton.com/garden-history" target="_blank">
          essay on its history and ethos
        </a>
        . Major credit also goes to Swyx for pushing the{" "}
        <a href="https://www.swyx.io/learn-in-public" target="_blank">
          learn in public
        </a>{" "}
        philosophy.
      </StyledP>
      <StyledP>
        My <Link href="/garden">garden</Link> is organized by writing formats
        and statuses, aka growth stages. I have four writing formats:
      </StyledP>
      <StyledUl>
        <li>Essays</li>
        <li>Brainstorms</li>
        <li>Show 'n tells</li>
        <li>TILs</li>
      </StyledUl>
      <StyledP>
        <strong>Essays</strong> are long-form pieces that I've been thinking
        about and iterating on for a while. They are typically less technical
        and more opinionated than a Show 'n tell.
      </StyledP>
      <StyledP>
        <strong>Brainstorms</strong> are raw thought streams that I initially
        wrote down without consulting the Internet, letting my train of thought
        run uninterrupted, followed by a debrief answering my questions and
        pointing out what I was right or wrong about. This is an experimental
        (and vulnerable 😅) format that I came up with while{" "}
        <Link href="/map-in-the-woods" target="_blank">
          downloading an offline map with poor network connection
        </Link>{" "}
        on a hiking trip.
      </StyledP>
      <StyledP>
        <strong>Show n' tells</strong> are write-ups detailing how I built
        something. They aren't quite as step-by-step and broadly applicable as a
        classic "tutorial", and they are typically more technical with more code
        snippets than my Essays.
      </StyledP>
      <StyledP>
        <strong>TIL</strong> stands for <em>Today I Learned</em>. TILs are small
        tidbits that I come across and jot down quickly. They may not connect to
        anything I'm currently working on, but if I think something is neat
        enough to share and stash away for later, I'll write a TIL. Inspired by
        Josh Branchaud's{" "}
        <a href="https://github.com/jbranchaud/til" target="_blank">
          til
        </a>{" "}
        repo.
      </StyledP>
      <StyledP>
        Each piece of content also has a status or growth stage, which I
        borrowed directly from Maggie:
      </StyledP>
      <StyledUl>
        <li>Seedlings</li>
        <li>Buddings</li>
        <li>Evergreens</li>
      </StyledUl>
      <StyledP>
        <strong>Seedlings</strong> are young, unrefined ideas that I've just
        planted—or old, unrefined ideas that need watering. If I am a diligent,
        caring gardener, they'll grow into Buddings and maybe even Evergreens.
      </StyledP>
      <StyledP>
        <strong>Buddings</strong> are maturing works that I have spent
        considerable time and energy cultivating but have not finished. They are
        teenageers who have outgrown their Seedling status and may someday grow
        into Evergreens.
      </StyledP>
      <StyledP>
        <strong>Evergreens</strong> are complete works that I have edited and
        published as a cohesive whole. They are similar to a traditional blog
        post published at a point in time in that way.
      </StyledP>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-top: 16px;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const StyledP = styled.p`
  margin-bottom: 16px;
`;

const StyledUl = styled.ul`
  margin-left: 8px;
  margin-bottom: 16px;
  font-weight: 600;

  & > li::before {
    content: "✦ ";
    padding-right: 4px;
  }
`;

export default About;
