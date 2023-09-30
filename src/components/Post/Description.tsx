import Link from "next/link";
import styled from "styled-components";
import { PostFormat, PostStatus } from "../Garden";

export const LABEL_TO_DESCRIPTION = {
  [PostFormat.Essay]: EssayDescription,
  [PostFormat.ShowNTell]: ShowNTellDescription,
  [PostFormat.Brainstorm]: BrainstormDescription,
  [PostStatus.Evergreen]: EvergreenDescription,
  [PostStatus.Budding]: BuddingDescription,
  [PostStatus.Seedling]: SeedlingDescription,
  [PostFormat.TIL]: TILDescription,
};

function EssayDescription() {
  return (
    <>
      <StyledP>
        <b>Essays</b> are long-form pieces that I've been thinking about and
        iterating on for a while. They are typically less technical and more
        opinionated than a Show 'n tell.
      </StyledP>
      <StyledP>
        You can find all Essays{" "}
        <Link href={`/garden?format=${PostFormat.Essay}`}>in the garden</Link>{" "}
        and an explanation of my writing formats{" "}
        <Link href="/about#this-site">on the about page</Link>.
      </StyledP>
    </>
  );
}

function BrainstormDescription() {
  return (
    <>
      <StyledP>
        <b>Brainstorms</b> are raw thought streams that I initially wrote down
        without consulting the Internet, letting my train of thought run
        uninterrupted, followed by a debrief answering my questions and pointing
        out what I was right or wrong about.
      </StyledP>
      <StyledP>
        This is an experimental (and vulnerable 😅) format that I came up with
        while{" "}
        <a href="/map-in-the-woods" target="_blank">
          downloading an offline map with poor network connection
        </a>{" "}
        on a hiking trip.
      </StyledP>
      <StyledP>
        You can find all Brainstorms{" "}
        <Link href={`/garden?format=${PostFormat.Brainstorm}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing formats{" "}
        <Link href="/about#this-site">on the about page</Link>.
      </StyledP>
    </>
  );
}

function ShowNTellDescription() {
  return (
    <>
      <StyledP>
        <b>Show n' tells</b> are write-ups detailing how I built something. They
        aren't quite as step-by-step and broadly applicable as a classic
        "tutorial", and they are typically more technical with more code
        snippets than my Essays.
        <StyledP></StyledP>
        You can find all Show n' tells{" "}
        <Link href={`/garden?format=${PostFormat.ShowNTell}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing formats{" "}
        <Link href="/about#this-site">on the about page</Link>.
      </StyledP>
    </>
  );
}

function TILDescription() {
  return (
    <>
      <StyledP>
        <b>TIL</b> stands for <i>Today I Learned</i>.
      </StyledP>
      <StyledP>
        TILs are small tidbits that I come across and jot down quickly. They may
        not connect to anything I'm currently working on, but if I think
        something is neat enough to stash away for later, I'll write a TIL.
        Inspired by Josh Branchaud's{" "}
        <a href="https://github.com/jbranchaud/til" target="_blank">
          til
        </a>{" "}
        repo.
      </StyledP>
      <StyledP>
        You can find all TILs{" "}
        <Link href={`/garden?format=${PostFormat.TIL}`}>in the garden</Link> and
        an explanation of my writing formats{" "}
        <Link href="/about#this-site">on the about page</Link>.
      </StyledP>
    </>
  );
}

function SeedlingDescription() {
  return (
    <>
      <StyledP>
        <b>Seedlings</b> are young, unrefined ideas that I've just planted—or
        old, unrefined ideas that need watering. If I am a diligent, caring
        gardener, they'll grow into Buddings and maybe even Evergreens.
      </StyledP>
      <StyledP>
        You can find all Seedlings{" "}
        <Link href={`/garden?status=${PostStatus.Seedling}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing growth stages{" "}
        <Link href="/about#this-site">on the about page</Link>.
      </StyledP>
    </>
  );
}

function BuddingDescription() {
  return (
    <>
      <StyledP>
        <b>Buddings</b> are maturing works that I have spent considerable time
        and energy cultivating but have not finished. They are teenageers who
        have outgrown their Seedling status and may someday grow into
        Evergreens.
      </StyledP>
      <StyledP>
        You can find all Buddings{" "}
        <Link href={`/garden?status=${PostStatus.Budding}`}>in the garden</Link>{" "}
        and an explanation of my writing growth stages{" "}
        <Link href="/about#this-site">on the about page</Link>.
      </StyledP>
    </>
  );
}

function EvergreenDescription() {
  return (
    <>
      <StyledP>
        <b>Evergreens</b> are complete works that I have edited and published as
        a cohesive whole. They are similar to a traditional blog post published
        at a point in time in that way.
      </StyledP>
      <StyledP>
        You can find all Evergreens{" "}
        <Link href={`/garden?status=${PostStatus.Evergreen}`}>
          in the garden
        </Link>{" "}
        and an explanation of my writing growth stages{" "}
        <Link href="/about#this-site">on the about page</Link>.
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
`;
