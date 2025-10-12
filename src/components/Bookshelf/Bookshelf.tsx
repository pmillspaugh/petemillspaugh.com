import Image from "next/image";
import Link from "next/link";
import styles from "./Bookshelf.module.css";

export default function Bookshelf() {
  return (
    <>
      <h1 className={styles.h1}>Bookshelf</h1>
      <p className={styles.p}>
        These are books I’ve read and would read again, listed alphabetically.
        There are so many amazing books I’ve excluded because I’m not sure I’d
        read them again, but that might not be the best filter. There’s also a{" "}
        <Link href="/present-you">present me</Link> bias toward books I’ve read
        recently or care about now (when I set up this bookshelf in summer
        2025).{" "}
      </p>
      <ul className={styles.shelf}>
        <Book
          title="A Small Matter of Programming"
          author="Bonnie Nardi"
          image="/images/a-small-matter-of-programming.webp"
          blurb="For programmers"
          noteLink="/a-small-matter-of-programming"
          goodreadsLink="https://www.goodreads.com/book/show/581700.A_Small_Matter_of_Programming"
        />
        <Book
          title="Born to Run"
          author="Christopher McDougall"
          image="/images/born-to-run.jpg"
          blurb="For runners"
          noteLink="/born-to-run"
          goodreadsLink="https://www.goodreads.com/book/show/6289283-born-to-run"
        />
        <Book
          title="Demon Copperhead"
          author="Barbara Kingsolver"
          image="/images/demon-copperhead.jpg"
          blurb="For Dickens readers"
          goodreadsLink="https://www.goodreads.com/book/show/60194162-demon-copperhead"
        />
        <Book
          title="Don’t Sweat the Small Stuff"
          author="Richard Carlson"
          image="/images/dont-sweat-the-small-stuff.webp"
          blurb="For humans"
          noteLink="/dont-sweat-the-small-stuff"
          goodreadsLink="https://www.goodreads.com/book/show/170548.Don_t_Sweat_the_Small_Stuff_and_It_s_All_Small_Stuff"
        />
        <Book
          title="How Not to Die"
          author="Dr. Michael Greger"
          image="/images/how-not-to-die.jpg"
          blurb="For the vegan-interested"
          noteLink="/how-not-to-die"
          goodreadsLink="https://www.goodreads.com/book/show/25663961-how-not-to-die"
        />
        <Book
          title="Make It Stick"
          author="Brown, Roediger, McDaniel"
          image="/images/make-it-stick.webp"
          blurb="For lifelong learners"
          goodreadsLink="https://www.goodreads.com/book/show/18770267-make-it-stick"
        />
        <Book
          title="The Anxious Generation"
          author="Jonathan Haidt"
          image="/images/the-anxious-generation.webp"
          blurb="For parents, teachers"
          goodreadsLink="https://www.goodreads.com/book/show/171681821-the-anxious-generation"
        />
        <Book
          title="The Artist’s Way"
          author="Julia Cameron"
          image="/images/the-artists-way.jpg"
          blurb="For (aspiring) artists"
          noteLink="/the-artists-way"
          goodreadsLink="https://www.goodreads.com/book/show/615570.The_Artist_s_Way"
        />
        <Book
          title="The Business of Being a Writer"
          author="Jane Friedman"
          image="/images/the-business-of-being-a-writer.jpg"
          blurb="For writers and bloggers"
          noteLink="/the-business-of-being-a-writer"
          goodreadsLink="https://www.goodreads.com/book/show/219627375-the-business-of-being-a-writer-second-edition"
        />
        <Book
          title="The Coddling of the American Mind"
          author="Jonathan Haidt & Greg Lukianoff"
          image="/images/the-coddling-of-the-american-mind.jpg"
          blurb="For Gen Z and Gen Z-interested"
          goodreadsLink="https://www.goodreads.com/book/show/36556202-the-coddling-of-the-american-mind"
        />
        <Book
          title="The Creative Act"
          author="Rick Rubin"
          image="/images/the-creative-act.jpg"
          blurb="For creatives, artists"
          noteLink="/the-creative-act"
          goodreadsLink="https://www.goodreads.com/book/show/60965426-the-creative-act"
        />
        <Book
          title="The David Foster Wallace Reader"
          author="David Foster Wallace"
          image="/images/dfw-reader.jpg"
          blurb="For anyone, really"
          noteLink="/on-dfw"
          goodreadsLink="https://www.goodreads.com/book/show/21423291-the-david-foster-wallace-reader"
        />
        <Book
          title="The Dream Machine"
          author="Mitchell Waldrop"
          image="/images/the-dream-machine.webp"
          blurb="For programmers"
          goodreadsLink="https://www.goodreads.com/book/show/722412.The_Dream_Machine"
        />
        <Book
          title="The Food Lab"
          author="Kenji López-Alt"
          image="/images/the-food-lab.webp"
          blurb="For science-y cooks"
          goodreadsLink="https://www.goodreads.com/book/show/24861842-the-food-lab"
        />
        <Book
          title="The Last Traverse"
          author="Ty Gagne"
          image="/images/the-last-traverse.jpg"
          blurb="For hikers, skiers, White Mountaineers"
          goodreadsLink="https://www.goodreads.com/book/show/55946570-the-last-traverse"
        />
        <Book
          title="Why We Sleep"
          author="Matthew Walker"
          image="/images/why-we-sleep.webp"
          blurb="For humans"
          goodreadsLink="https://www.goodreads.com/book/show/34466963-why-we-sleep"
        />
      </ul>
    </>
  );
}

const Book = ({
  title,
  author,
  image,
  blurb,
  noteLink,
  goodreadsLink,
}: {
  title: string;
  author: string;
  image: string;
  blurb: string;
  goodreadsLink: string;
  noteLink?: string;
}) => {
  return (
    <li className={styles.li}>
      <figure className={styles.book}>
        <Image
          src={image}
          className={styles.cover}
          alt={`${title} by ${author}`}
          fill={true}
        />
      </figure>
      <figcaption className={styles.figcaption}>
        {title} by {author}
      </figcaption>
      <p>{blurb}</p>
      <p className={styles.links}>
        {noteLink && (
          <>
            <Link href={noteLink} className={styles.noteLink}>
              Read my review
            </Link>{" "}
            ~{" "}
          </>
        )}
        <a href={goodreadsLink}>Goodreads</a>
      </p>
    </li>
  );
};
