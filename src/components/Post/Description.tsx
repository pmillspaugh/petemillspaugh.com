import Link from "next/link";
import styled from "styled-components";
import { PostFormat, PostStatus } from "./types";

export const LABEL_TO_DESCRIPTION = {
  [PostFormat.Essay]: EssayDescription,
  [PostFormat.ShowNTell]: ShowNTellDescription,
  [PostFormat.Brainstorm]: BrainstormDescription,
  [PostFormat.TIL]: TILDescription,
  [PostFormat.Note]: NoteDescription,
  [PostFormat.Clipping]: ClippingDescription,
  [PostStatus.Evergreen]: EvergreenDescription,
  [PostStatus.Budding]: BuddingDescription,
  [PostStatus.Seedling]: SeedlingDescription,
};

function EssayDescription() {
  return (
    <>
      <StyledP>
        <strong>Essays</strong> are long-form pieces that I've usually been
        thinking about for a while. They are typically less technical and more
        opinionated than a Show 'n tell.
      </StyledP>
      <StyledP>
        You can find all Essays{" "}
        <Link href={`/garden?format=${PostFormat.Essay}`}>in the garden</Link>{" "}
        and an explanation of my writing formats{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

function BrainstormDescription() {
  return (
    <>
      <StyledP>
        <strong>Brainstorms</strong> are raw thought streams that I initially
        wrote down without consulting the Internet, followed by a debrief
        answering my questions and pointing out what I was right or wrong about.
      </StyledP>
      <StyledP>
        This is an experimental (and vulnerable 😅) format that I came up with
        while <Link href="/map-in-the-woods">downloading a map</Link> on a
        hiking trip.
      </StyledP>
      <StyledP>
        You can find all Brainstorms{" "}
        <Link href={`/garden?format=${PostFormat.Brainstorm}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing formats{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

function ShowNTellDescription() {
  return (
    <>
      <StyledP>
        <strong>Show n' tells</strong> are write-ups detailing how I built
        something. They aren't typically quite as step-by-step and broadly
        applicable as a classic "tutorial", and they are usually more technical
        with more code snippets than my Essays.
        <StyledP></StyledP>
        You can find all Show n' tells{" "}
        <Link href={`/garden?format=${PostFormat.ShowNTell}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing formats{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

function TILDescription() {
  return (
    <>
      <StyledP>
        <strong>TIL</strong> stands for <em>Today I Learned</em>.
      </StyledP>
      <StyledP>
        TILs are tidbits that I come across and jot down quickly. They may not
        connect to anything I'm currently working on, but if I think something
        is neat enough to share and stash away for later, I'll write a TIL.
        Inspired by Josh Branchaud's{" "}
        <a href="https://github.com/jbranchaud/til">til</a> repo.
      </StyledP>
      <StyledP>
        You can find all TILs{" "}
        <Link href={`/garden?format=${PostFormat.TIL}`}>in the garden</Link> and
        an explanation of my writing formats{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

function NoteDescription() {
  return (
    <>
      <StyledP>
        <strong>Notes</strong> are my catch-all format for things I want to
        write about that don't neatly fit into another category (Essays, Show n'
        tells, Brainstorms, TILs). A Note could be as small as a Tweet or could
        grow large enough to call for re-potting as an Essay.
      </StyledP>
      <StyledP>
        You can find all Notes{" "}
        <Link href={`/garden?format=${PostFormat.Note}`}>in the garden</Link>{" "}
        and an explanation of my writing formats{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

function ClippingDescription() {
  return (
    <>
      <StyledP>
        <strong>Clippings</strong> are email newsletters that I send every month
        or two (ish). I write about what's been on my mind and propagate a
        selection of things I've planted since the last clipping.
      </StyledP>
      <StyledP>
        You can sign up to receive clippings in the{" "}
        <Link href="#footer">footer</Link>, see all clippings in the{" "}
        <Link href={`/garden?format=${PostFormat.Clipping}`}>garden</Link> , or
        read an explanation of my writing formats on the{" "}
        <Link href="/about#garden">about</Link> page.
      </StyledP>
    </>
  );
}

function SeedlingDescription() {
  return (
    <>
      <StyledP>
        <strong>Seedlings</strong> are young, unrefined ideas that I've just
        planted—or old, unrefined ideas that need watering. If I am a diligent,
        caring gardener, they'll grow into Buddings and maybe even Evergreens.
      </StyledP>
      <StyledP>
        You can find all Seedlings{" "}
        <Link href={`/garden?status=${PostStatus.Seedling}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing growth stages{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

function BuddingDescription() {
  return (
    <>
      <StyledP>
        <strong>Buddings</strong> are maturing works that I have spent
        considerable time and energy cultivating but have not finished. They are
        teenagers who have outgrown their Seedling status and may someday grow
        into Evergreens.
      </StyledP>
      <StyledP>
        You can find all Buddings{" "}
        <Link href={`/garden?status=${PostStatus.Budding}`}>in the garden</Link>{" "}
        and an explanation of my writing growth stages{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

function EvergreenDescription() {
  return (
    <>
      <StyledP>
        <strong>Evergreens</strong> are complete works that I have edited and
        published as a cohesive whole. They are similar to a traditional blog
        post published at a point in time in that way.
      </StyledP>
      <StyledP>
        You can find all Evergreens{" "}
        <Link href={`/garden?status=${PostStatus.Evergreen}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing growth stages{" "}
        <Link href="/about#garden">on the about page</Link>.
      </StyledP>
    </>
  );
}

const StyledP = styled.p`
  font-size: 0.875rem;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 1200px) {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
`;
