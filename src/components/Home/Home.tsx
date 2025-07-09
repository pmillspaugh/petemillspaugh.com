import Link from "next/link";
import Code from "@/components/Code";
import useIsWindowsOrFirefox from "@/hooks/useIsWindowsOrFirefox.hook";
import styles from "./Home.module.css";

const Home = () => {
  const isWindowsOrFirefox = useIsWindowsOrFirefox();

  return (
    <div className={styles.intro}>
      <h1 className={styles.h1}>I’m Pete, and this is my digital garden.</h1>
      <p className={styles.p}>
        A digital garden is like a blog except that much of what I’ve planted
        (written) is raw and unfinished. You can read more about{" "}
        <Link href="/about#me">me</Link> and{" "}
        <Link href="/about#garden">my garden</Link> if you’d like. Tug on the
        Edison bulb in the top right if you prefer nighttime.
      </p>
      <p className={styles.p}>
        Of my writing, programmers have liked{" "}
        <Link href="/edison-bulb">Edison bulb</Link>,{" "}
        <Link href="/weeks-of-your-life">Weeks of your life</Link>,{" "}
        <Link href="/cultivating-emails">Cultivating emails</Link>,{" "}
        <Link href="/malleable-garden">Malleable garden</Link>, and{" "}
        <Link href="/think-small">Think small</Link>. Non-coders seem to enjoy{" "}
        <a href="https://weeksofyour.life">weeksofyour.life</a>,{" "}
        <Link href="/37-states">37 states</Link>, and{" "}
        <Link href="/my-next-next-next">My next, next, next job</Link>.
      </p>
      <p className={styles.p}>
        Wander through the <Link href="/garden">garden</Link> to browse all my
        writing, press <Code>{isWindowsOrFirefox ? "⌃" : "⌘"}+K</Code> to
        search, or scroll down below the trees and see what you find. P.S. tug
        on the light bulb in the top right if you prefer nighttime.
      </p>
    </div>
  );
};

export default Home;
