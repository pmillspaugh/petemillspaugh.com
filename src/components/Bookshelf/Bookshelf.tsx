import Image from "next/image";
import Link from "next/link";
import styles from "./Bookshelf.module.css";

export default function Bookshelf() {
  return (
    <>
      <h1 className={styles.h1}>Bookshelf</h1>
      <p className={styles.p}>
        These are books I’ve read and would read again, listed alphabetically. I
        generally read non-fiction, but I’ve included good fiction, too. There’s
        a <Link href="/present-you">present me</Link> bias toward books I’ve
        read recently and care about now (summer ’25).{" "}
      </p>
      <p className={styles.p}>
        More books are listed on my{" "}
        <a href="https://bookshop.org/shop/pete-millspaugh">
          Bookshop.org affiliate page
        </a>
        .{" "}
        <em>
          If you purchase a book through an affiliate link, I’ll earn a 10%
          commission on the profit.
        </em>
      </p>
      <ul className={styles.shelf}>
        <Book
          title="A Small Matter of Programming"
          author="Bonnie Nardi"
          image="/images/a-small-matter-of-programming.webp"
          blurb="For programmers"
          noteLink="/a-small-matter-of-programming"
          affliateLink="https://bookshop.org/a/115276/9780262292368"
        />
        {/* <Book
          title="All the Light We Cannot See"
          author="Anthony Doerr"
          image="/images/all-the-light-we-cannot-see.jpg"
          blurb="For fiction readers"
          affliateLink="https://bookshop.org/a/115276/9781501173219"
        /> */}
        <Book
          title="Born to Run"
          author="Christopher McDougall"
          image="/images/born-to-run.jpg"
          blurb="For runners"
          noteLink="/born-to-run"
          affliateLink="https://bookshop.org/a/115276/9780307279187"
        />
        <Book
          title="Demon Copperhead"
          author="Barbara Kingsolver"
          image="/images/demon-copperhead.jpg"
          blurb="For Dickens readers"
          affliateLink="https://bookshop.org/a/115276/9780063251984"
        />
        <Book
          title="Don't Sweat the Small Stuff"
          author="Richard Carlson"
          image="/images/dont-sweat-the-small-stuff.webp"
          blurb="For humans"
          noteLink="/dont-sweat-the-small-stuff"
          affliateLink="https://bookshop.org/a/115276/9780786881857"
        />
        <Book
          title="Hackers & Painters"
          author="Paul Graham"
          image="/images/hackers-and-painters.webp"
          blurb="For programmers"
          noteLink="/hackers-and-painters"
          affliateLink="https://bookshop.org/a/115276/9781449389550"
        />
        <Book
          title="How Not to Die"
          author="Dr. Michael Greger"
          image="/images/how-not-to-die.jpg"
          blurb="For the vegan-interested"
          noteLink="/how-not-to-die"
          affliateLink="https://bookshop.org/a/115276/9781250066114"
        />
        <Book
          title="Make It Stick"
          author="Brown, Roediger, McDaniel"
          image="/images/make-it-stick.webp"
          blurb="For lifelong learners"
          affliateLink="https://bookshop.org/a/115276/9780674729018"
        />
        {/* <Book
          title="Moneyball"
          author="Michael Lewis"
          image="/images/moneyball.jpg"
          blurb="For sports fans"
          affliateLink="https://bookshop.org/a/115276/9780393324815"
        /> */}
        {/* <Book
          title="Rocket Boys"
          author="Homer Hickam, Jr."
          image="/images/rocket-boys.jpg"
          blurb="For boys and crafty learners"
          affliateLink="https://bookshop.org/a/115276/9780385333214"
        /> */}
        {/* <Book
          title="Rules of Civility"
          author="Amor Towles"
          image="/images/rules-of-civility.jpg"
          blurb="For fiction readers, New Yorkers"
          affliateLink="https://bookshop.org/a/115276/9780143121169"
        /> */}
        {/* <Book
          title="Sapiens"
          author="Yuval Noah Harari"
          image="/images/sapiens.webp"
          blurb="For non-fiction readers"
          affliateLink="https://bookshop.org/a/115276/9780063422018"
        /> */}
        <Book
          title="The Art of Doing Science and Engineering"
          author="Richard Hamming"
          image="/images/the-art-of-doing-science-and-engineering.webp"
          blurb="For programmers"
          noteLink="/the-art-of-doing-science-and-engineering"
          affliateLink="https://bookshop.org/a/115276/9781732265172"
        />
        <Book
          title="The Artist's Way"
          author="Julia Cameron"
          image="/images/the-artists-way.jpg"
          blurb="For (aspiring) artists"
          noteLink="/the-artists-way"
          affliateLink="https://bookshop.org/a/115276/9780143129257"
        />
        {/* <Book
          title="The Boys in the Boat"
          author="Daniel James Brown"
          image="/images/boys-in-the-boat.jpg"
          blurb="For sport, history, and sport history fans"
          affliateLink="https://bookshop.org/a/115276/9780143125471"
        /> */}
        <Book
          title="The Business of Being a Writer"
          author="Jane Friedman"
          image="/images/the-business-of-being-a-writer.jpg"
          blurb="For writers and bloggers"
          noteLink="/the-business-of-being-a-writer"
          affliateLink="https://bookshop.org/a/115276/9780226838656"
        />
        <Book
          title="The Coddling of the American Mind"
          author="Jonathan Haidt & Greg Lukianoff"
          image="/images/the-coddling-of-the-american-mind.jpg"
          blurb="For Gen Z and Gen Z-interested"
          affliateLink="https://bookshop.org/a/115276/9780735224919"
        />
        <Book
          title="The Creative Act"
          author="Rick Rubin"
          image="/images/the-creative-act.jpg"
          blurb="For creatives, artists"
          noteLink="/the-creative-act"
          affliateLink="https://bookshop.org/a/115276/9780593652886"
        />
        <Book
          title="The David Foster Wallace Reader"
          author="David Foster Wallace"
          image="/images/dfw-reader.jpg"
          blurb="For anyone, really"
          noteLink="/on-dfw"
          affliateLink="https://bookshop.org/a/115276/9780316182409"
        />
        <Book
          title="The Dream Machine"
          author="Mitchell Waldrop"
          image="/images/the-dream-machine.webp"
          blurb="For programmers"
          affliateLink="https://bookshop.org/a/115276/9781732265110"
        />
        <Book
          title="The Food Lab"
          author="Kenji López-Alt"
          image="/images/the-food-lab.webp"
          blurb="For science-y cooks"
          affliateLink="https://bookshop.org/a/115276/9780393081084"
        />
        <Book
          title="The Last Traverse"
          author="Ty Gagne"
          image="/images/the-last-traverse.jpg"
          blurb="For hikers, skiers, White Mountaineers"
          affliateLink="https://bookshop.org/a/115276/9781734930832"
        />
        {/* <Book
          title="The Power of Habit"
          author="Charles Duhigg"
          image="/images/the-power-of-habit.webp"
          blurb="For pretty much anyone"
          affliateLink="https://bookshop.org/a/115276/9780812981605"
        /> */}
        {/* <Book
          title="Thinking, Fast and Slow"
          author="Daniel Kahneman"
          image="/images/thinking-fast-and-slow.webp"
          blurb="For the behavioral psych-interested"
          affliateLink="https://bookshop.org/a/115276/9780674729018"
        /> */}
        {/* <Book
          title="Unbroken"
          author="Laura Hillenbrand"
          image="/images/unbroken.jpg"
          blurb="For fans of improbable stories"
          affliateLink="https://bookshop.org/a/115276/9780812974492"
        /> */}
        {/* <Book
          title="Where the Crawdads Sing"
          author="Delia Owens"
          image="/images/where-the-crawdads-sing.webp"
          blurb="For fiction readers"
          affliateLink="https://bookshop.org/a/115276/9780735219106"
        /> */}
        <Book
          title="Why We Sleep"
          author="Matthew Walker"
          image="/images/why-we-sleep.webp"
          blurb="For humans"
          affliateLink="https://bookshop.org/a/115276/9781501144325"
        />
        <Book
          title="Word By Word"
          author="Kory Stamper"
          image="/images/word-by-word.jpg"
          blurb="For word nerds"
          affliateLink="https://bookshop.org/a/115276/9781101970263"
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
  affliateLink,
}: {
  title: string;
  author: string;
  image: string;
  blurb: string;
  affliateLink: string;
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
        <a href={affliateLink}>Buy on Bookshop.org</a>
      </p>
    </li>
  );
};
