import Link from "next/link";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <StyledH1>About . . .</StyledH1>

      <StyledH2 id="me">...me</StyledH2>
      <StyledP>
        I’m Pete. I’m a programmer and writer, mostly. Right now I am writing a
        book about Internet domains,{" "}
        <a href="https://dotcom.press">
          <em>dot com et al</em>
        </a>
        . I also freelance, making good-looking websites for small businesses,
        restaurants, writers, artists, actors, startups...and maybe you? Email
        me at{" "}
        <a href="mailto:pete@petemillspaugh.com">pete@petemillspaugh.com</a> if
        you’d like to work together or share domain tales.
      </StyledP>
      <StyledP>
        I love frontend-y Web stuff (HTML/CSS/JS), and I enjoy working with
        server-side JavaScript and SQL. I also keep a{" "}
        <Link href="/wishlist">list</Link> of technologies I’d like to learn.
      </StyledP>
      <StyledP>
        My last job was founding engineer at{" "}
        <a href="https://www.membrane.io/">Membrane</a>, working on devtools in
        Rust and TypeScript. Before that, I worked at SeedFi (and then Credit
        Karma{" "}
        <a href="https://www.intuit.com/company/press-room/press-releases/2022/intuit-to-acquire-financial-health-startup-seedfi/">
          via acquisition
        </a>
        ), working on credit- and savings-building products for Americans.
        Before I started making websites for a living, I worked as a tech
        investment banker (briefly) and a summer camp counselor at{" "}
        <a href="https://pasquaney.org">Camp Pasquaney</a> (send your boys
        there!), leading backpacking trips and directing theater plays.
      </StyledP>
      <StyledP>
        Outside of coding and writing, I often run,{" "}
        <Link href="/bookshelf">read</Link>, cook, and boulder indoors (cliché,
        I know, but it’s fun). I live in Cincinnati, Ohio, and I really like it
        here.
      </StyledP>

      <StyledH2 id="garden">...my digital garden</StyledH2>
      <StyledP>
        This website is a digital garden, which is a bit different than a blog
        where each post is a “finished” work ready for public eyes. Instead,
        writing is planted, watered, pruned, re-potted, and always growing. I
        owe most of my gardening inspiration to Maggie Appleton for{" "}
        <a href="https://maggieappleton.com/">her amazing digital garden</a> and{" "}
        <a href="https://maggieappleton.com/garden-history">
          essay on its history and ethos
        </a>
        . Major credit also goes to Swyx for pushing the{" "}
        <a href="https://www.swyx.io/learn-in-public">learn in public</a>{" "}
        philosophy.
      </StyledP>
      <StyledP>
        All my garden code is{" "}
        <a href="https://github.com/pmillspaugh/petemillspaugh.com">public</a>.
        I cover my tech stack in the readme.
      </StyledP>
      <StyledP>
        My <Link href="/garden">garden</Link> is organized by writing formats
        and statuses, aka growth stages. I have six writing formats:
      </StyledP>
      <StyledUl>
        <li>
          <strong>Essays:</strong> long-form pieces that I’ve usually been
          thinking about for a while. They are typically less technical and more
          opinionated than a Show ’n tell
        </li>
        <li>
          <strong>Brainstorms:</strong> raw thought streams that I initially
          wrote down without Internet connection, followed by a debrief
          answering my questions and pointing out where I was right or wrong.
          This is an experimental (and vulnerable 😅) format that I came up with
          while <Link href="/map-in-the-woods">downloading a map</Link> on a
          hiking trip
        </li>
        <li>
          <strong>Show n’ tells:</strong> write-ups detailing how I built
          something. They aren’t quite as step-by-step and broadly applicable as
          a classic “tutorial”, and they are usually more technical with more
          code snippets than my Essays
        </li>
        <li>
          <strong>TILs:</strong> stands for <em>Today I Learned</em>. TILs are
          small tidbits that I come across and jot down quickly. They may not
          connect to anything I’m currently working on, but if I think something
          is neat enough to share and stash away for later, I’ll write a TIL.
          Inspired by Josh Branchaud’s{" "}
          <a href="https://github.com/jbranchaud/til">til</a> repo
        </li>
        <li>
          <strong>Notes:</strong> things I want to write about that don’t neatly
          fit into another category. A Note could be as small as a Tweet or
          could grow large enough to re-pot as an Essay
        </li>
        <li>
          <strong>Clippings:</strong> email newsletters that I send every so
          often (max once per month). I write about what’s been on my mind and
          propagate a selection of things I’ve planted since the last clipping.
          You can sign up to receive clippings in the{" "}
          <a href="#footer">footer</a>
        </li>
      </StyledUl>
      <StyledP>
        Each piece of content also has a status, which I borrowed directly from
        Maggie A.:
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
        my own writing status metaphor to use in place of Maggie’s{" "}
        <code>seedling/budding/evergreen</code>. Some noteworthy candidates
        include <code>puddle/lake/ocean</code>,{" "}
        <code>boulder/hill/mountain</code>,{" "}
        <code>raw/half-baked/golden-brown</code>, and{" "}
        <code>baby/teenager/adult</code>.
      </StyledP>
      <StyledP>
        As yet nothing resonates with me quite as much as the stages of plant
        growth—it is a garden, after all. Greenery evokes a positive feeling,
        and the metaphor stretches really well: I can water my plants (write),
        prune them (edit), give them some sun (think), or even re-pot (a TIL
        into an Essay, for example). If you are a metaphor nerd or digital
        gardener, <a href="mailto:pete@petemillspaugh.com">send me an email</a>{" "}
        to say hi and share your metaphors!
      </StyledP>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const StyledP = styled.p`
  margin-bottom: 16px;

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-bottom: 24px;
  }
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

  @media (min-width: 1200px) {
    font-size: 1.25rem;

    li {
      margin-bottom: 16px;
    }
  }
`;

export default About;
