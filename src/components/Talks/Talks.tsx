import Link from "next/link";
import styles from "./Talks.module.css";

const Talks = () => {
  return (
    <>
      <h1 className={styles.h1}>Talks</h1>
      <p className={styles.p}>
        I like talks, mainly because preparing for one (“talk-driven
        development”) encourages thorough learning, much like teaching and
        writing.
      </p>
      <ul className={styles.ul}>
        <li>
          <time className={styles.date} dateTime="2025-10-06">
            October 8, 2025
          </time>
          <p className={styles.title}>
            Claim your name @ StartupCincy Week 2025
          </p>
          <p>
            My talk website is still live at{" "}
            <a href="https://dotcom.press/cincy">dotcom.press/cincy</a>, and I
            also wrote a{" "}
            <Link href="/domains-for-startups">blog post version</Link> of the
            talk that covers the same ground.
          </p>
        </li>
        <li>
          <time className={styles.date} dateTime="2025-10-06">
            October 6, 2025
          </time>
          <p className={styles.title}>
            Best of Demo Night @ StartupCincy Week 2025
          </p>
          <p>
            I demo’d{" "}
            <a href="https://dotcom.press/tld-wiki">dotcom.press/tld-wiki</a>{" "}
            for a crowd at the Woodward Theater.
          </p>
        </li>
        <li>
          <time className={styles.date} dateTime="2021-0724">
            July 24, 2021
          </time>
          <p className={styles.title}>Introduction to Web Accessibility</p>
          <p>
            My{" "}
            <a href="https://www.youtube.com/watch?v=pPX0Gk0l6Vo&t=12s">
              recorded
            </a>{" "}
            talk covered the important basics of accessibility for web devs.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Talks;
