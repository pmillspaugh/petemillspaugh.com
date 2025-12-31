import Link from "next/link";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <h1 className={styles.h1}>About</h1>

      <h2 id="me" className={styles.h2}>
        About me
      </h2>
      <p className={styles.p}>
        I’m Pete. I’m a programmer and writer. Right now I’m writing a{" "}
        <a href="https://dotcom.press">book</a> about the secret life of
        Internet domains and working part-time for{" "}
        <a href="https://val.town">Val Town</a>. I live in Cincinnati, Ohio.
      </p>

      <h2 id="garden" className={styles.h2}>
        About this digital garden
      </h2>
      <p className={styles.p}>
        This website is a digital garden, which is a bit different than a blog
        where each post is a “finished” work ready for public eyes. Instead, I
        might plant the seed of an essay, give it some sun, water it, tend to
        it, etc. I owe most of my gardening inspiration to{" "}
        <a href="https://maggieappleton.com/">Maggie Appleton</a> for her
        amazing garden and{" "}
        <a href="https://maggieappleton.com/garden-history">essay</a> on its
        history and ethos.
      </p>

      <h3 className={styles.h3}>Writing formats</h3>
      <p className={styles.p}>
        My <Link href="/garden">garden</Link> is organized by writing formats
        and growth stages. I have six formats:
      </p>
      <ul className={styles.ul}>
        <li>
          <strong>Essays:</strong> longform thinking, typically not technical
        </li>
        <li>
          <strong>Brainstorms:</strong> raw thought stream scribbled down
          without Internet connection, followed by a debrief pointing out what I
          got right and wrong
        </li>
        <li>
          <strong>Show n’ tells:</strong> write-ups on how I built a thing. Not
          quite as step-by-step nor broadly applicable as a classic “tutorial”,
          usually
        </li>
        <li>
          <strong>Clippings:</strong> email newsletters every N months. I
          propagate writing planted since the last clipping and write about what
          I’m up to / what I’ve read recently
        </li>
        <li>
          <strong>Notes:</strong> catch-all for writing that doesn’t fit into
          another category. Could start as small as a Tweet or grow large enough
          to re-pot as an essay
        </li>
        <li>
          <strong>TILs:</strong> <em>Today I Learned</em>. Small tidbits that I
          come across and jot down quickly. Inspired by Josh Branchaud’s TIL
          repo
        </li>
      </ul>

      <h3 className={styles.h3}>Growth stages</h3>
      <p className={styles.p}>
        Each piece of content also has a growth stage, which I borrowed directly
        from Maggie:
      </p>
      <ul className={styles.ul}>
        <li>
          <strong>Seedlings:</strong> young, unrefined ideas that I’ve just
          planted—or old ones that need watering. If I am a diligent gardener,
          they’ll grow into Buddings and Evergreens
        </li>
        <li>
          <strong>Buddings:</strong> maturing works that I’ve come back to tend
          to, water, and prune. They’ve outgrown Seedling status and may someday
          grow into Evergreens
        </li>
        <li>
          <strong>Evergreens:</strong> complete works that I have edited and
          published as a cohesive whole. They are similar to a traditional blog
          post published at a point in time in that way
        </li>
      </ul>
      <p className={styles.p}>
        I quite like metaphors, and I’ve spent time brainstorming my own growth
        stages metaphor to use in place of Maggie’s, but as yet nothing
        resonates with me quite as much as plant growth. It is a garden, after
        all. Greenery evokes a positive feeling, and the metaphor stretches
        really well: I can water my plants (write), prune them (edit), give them
        some sun (think), or even re-pot—a Note into an Essay, for example.
      </p>
      <p className={styles.p}>
        The code for my garden is{" "}
        <a href="https://github.com/pmillspaugh/petemillspaugh.com">public</a>.
        You can read about my tech stack in the readme.
      </p>
    </>
  );
};

export default About;
