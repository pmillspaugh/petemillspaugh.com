import Link from "next/link";
import Code from "@/components/Code";
import CommandBar from "@/components/CommandBar";
import useIsWindowsOrFirefox from "@/hooks/useIsWindowsOrFirefox.hook";
import styles from "./Home.module.css";

const Home = () => {
  const isWindowsOrFirefox = useIsWindowsOrFirefox();

  return (
    <div className={styles.intro}>
      <h1 className={styles.h1}>Pete Millspaugh is a programmer and writer.</h1>
      <p className={styles.p}>
        I’m <Link href="/about#me">Pete</Link>, and this is my{" "}
        <Link href="/about#garden">digital garden</Link>. Visit the{" "}
        <Link href="/garden">garden</Link> to browse all my writing, press{" "}
        <Code>{isWindowsOrFirefox ? "⌃" : "⌘"}+K</Code> to search, or scroll
        down below the trees and see what you find. Tug on the light bulb in the
        top right if you’re more of a night owl.
      </p>
      <p className={styles.p}>
        Of my writing, programmers have liked{" "}
        <Link href="/edison-bulb">Edison bulb</Link>,{" "}
        <Link href="/cultivating-emails">Cultivating emails</Link>,{" "}
        <Link href="/malleable-garden">Malleable garden</Link>, and{" "}
        <Link href="/think-small">Think small</Link>. Others seem to enjoy{" "}
        <a href="https://weeksofyour.life">weeksofyour.life</a>,{" "}
        <Link href="/anki">Choosing to remember with Anki</Link>, and{" "}
        <Link href="/vegan-dissonance">Vegan dissonance</Link>. For book recs,
        visit <Link href="/bookshelf">my bookshelf</Link>. For a career thought
        exercise, read{" "}
        <Link href="/my-next-next-next">My next, next, next job</Link>.
      </p>
      <p className={styles.p}>
        I’m writing a book about Internet domains:{" "}
        <a href="https://dotcom.press">
          <em>dot com et al</em>
        </a>
        . Email me with domain stories at <Code>pete@petemillspaugh.com</Code>.
      </p>
      <CommandBar />
    </div>
  );
};

export default Home;
