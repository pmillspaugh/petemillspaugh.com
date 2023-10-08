import Link from "next/link";
import styled from "styled-components";
import { PostFormat } from "@/components/Post";

const About = () => {
  return (
    <>
      <StyledH1>About</StyledH1>
      <StyledH2>Me</StyledH2>
      <StyledP>
        I’m Pete. I’m a web developer based in Brooklyn, New York. I currently
        work at SeedFi, now{" "}
        <a
          href="https://www.intuit.com/company/press-room/press-releases/2022/intuit-to-acquire-financial-health-startup-seedfi/"
          target="_blank"
        >
          part of Credit Karma.
        </a>
      </StyledP>
      <StyledP>
        I am a dev who likes to design and write. My bread ’n butter is
        TypeScript/JavaScript, React, Node, and SQL. In the near-ish term I’d
        like to learn Rust and Three.js,{" "}
        <Link href="/wishlist" target="_blank">
          among other things
        </Link>
        . When I’m not coding I like to write, cook, draw, climb, and run.
      </StyledP>
      <StyledH2 id="this-site">My digital garden</StyledH2>
      <StyledP>
        This website is a digital garden, which is a bit different than a blog
        where each post is a "finished" work ready for public eyes. Instead,
        writing is made public early on while it’s still being cultivated and
        growing. I owe most of my gardening inspiration to Maggie Appleton for{" "}
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
        <li>
          <strong>Essays:</strong> long-form pieces that I’ve usually been
          thinking about for a while. They are typically less technical and more
          opinionated than a Show ’n tell
        </li>
        <li>
          <strong>Brainstorms:</strong> raw thought streams that I initially
          wrote down without consulting the Internet, followed by a debrief
          answering my questions and pointing out where I was right or wrong.
          This is an experimental (and vulnerable 😅) format that I came up with
          while{" "}
          <Link href="/map-in-the-woods" target="_blank">
            downloading a map
          </Link>{" "}
          on a hiking trip
        </li>
        <li>
          <strong>Show n’ tells:</strong> write-ups detailing how I built
          something. They aren’t quite as step-by-step and broadly applicable as
          a classic "tutorial", and they are typically more technical with more
          code snippets than my Essays
        </li>
        <li>
          <strong>TILs:</strong> stands for <em>Today I Learned</em>. TILs are
          small tidbits that I come across and jot down quickly. They may not
          connect to anything I’m currently working on, but if I think something
          is neat enough to share and stash away for later, I’ll write a TIL.
          Inspired by Josh Branchaud’s{" "}
          <a href="https://github.com/jbranchaud/til" target="_blank">
            til
          </a>{" "}
          repo
        </li>
      </StyledUl>
      <StyledP>
        Each piece of content also has a status, which I borrowed directly from
        Maggie:
      </StyledP>
      <StyledUl>
        <li>
          <strong>Seedlings:</strong> young, unrefined ideas that I’ve just
          planted—or old, unrefined ideas that need watering. If I am a
          diligent, caring gardener, they’ll grow into Buddings and maybe even
          Evergreens
        </li>
        <li>
          <strong>Buddings:</strong> maturing works that I have spent
          considerable time and energy cultivating but have not finished. They
          are teenagers who have outgrown their Seedling status and may someday
          grow into Evergreens
        </li>
        <li>
          <strong>Evergreens:</strong> complete works that I have edited and
          published as a cohesive whole. They are similar to a traditional blog
          post published at a point in time in that way
        </li>
      </StyledUl>
      <StyledP>
        I quite like metaphors, and I’ve spent considerable time brainstorming
        my own writing status metaphor to use in place of Maggie’s
        seedling/budding/evergreen. Some noteworthy candidates include
        puddle/lake/ocean, boulder/hill/mountain, raw/half-baked/golden-brown,
        and baby/teenager/adult. As yet nothing resonates with me quite as well
        as the stages of plant growth—it is a garden, after all. Greenery evokes
        a positive feeling, and the metaphor stretches really well: I can water
        my plants (write), prune them (edit), give them some sun (think), or
        even re-pot (a TIL into an Essay, for example). If you are a metaphor
        nerd and/or digital gardener,{" "}
        <a href="https://twitter.com/pete_millspaugh" target="_blank">
          say hi on Twitter
        </a>{" "}
        and share your metaphors!
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
  margin-left: 16px;
  margin-bottom: 16px;

  li {
    margin-bottom: 8px;
  }

  & > li::before {
    content: "✦ ";
    padding-right: 4px;
  }
`;

export default About;
