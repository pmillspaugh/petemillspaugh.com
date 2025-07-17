import { useState } from "react";
import Link from "next/link";
import Code from "@/components/Code";
import CommandBar from "@/components/CommandBar";
import VisuallyHidden from "@/components/VisuallyHidden";
import useIsWindowsOrFirefox from "@/hooks/useIsWindowsOrFirefox.hook";
import styles from "./Home.module.css";

export default function Home() {
  const isWindowsOrFirefox = useIsWindowsOrFirefox();

  return (
    <div className={styles.intro}>
      <h1 className={styles.h1}>
        I’m <Link href="/about#me">Pete</Link>, and this is my{" "}
        <Link href="/about#garden">digital garden</Link>.
      </h1>
      <p className={styles.p}>
        Visit the <Link href="/garden">garden</Link> to browse all writing,
        press <Code>{isWindowsOrFirefox ? "⌃" : "⌘"}+K</Code> to search, and tug
        on the light bulb in the top right if you’re more of a night owl.
      </p>

      <div className={styles.grid}>
        <section>
          <h2>Now</h2>
          <p className={styles.p}>
            I’m writing a book,{" "}
            <em>dot com et al: The secret life of Internet domains</em>. Follow
            along at <a href="https://dotcom.press">dotcom.press</a>.
          </p>
        </section>

        <section className={styles.writing}>
          <h2>Programmers like</h2>
          <ul>
            <li>
              <Link href="/edison-bulb">Edison bulb</Link>
            </li>
            <li>
              <Link href="/malleable-garden">Malleable garden</Link>
            </li>
            <li>
              <Link href="/think-small">Think small</Link>
            </li>
          </ul>
        </section>

        <section className={styles.writing}>
          <h2>Others like</h2>
          <ul>
            <li>
              <a href="https://weeksofyour.life">weeksofyour.life</a>
            </li>
            <li>
              <Link href="/anki">Choosing with Anki</Link>
            </li>
            <li>
              <Link href="/my-next-next-next-job">My next, next, next job</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Clippings</h2>
          <p className={styles.p}>
            Read monthly-ish email clippings from my garden.
          </p>
          <Newsletter />
        </section>
      </div>

      <CommandBar />
    </div>
  );
}

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    const response = await fetch("https://garden.val.run/send-verification", {
      method: "POST",
      body: formData,
    });

    const { success } = await response.json();
    if (success) {
      setLoading(false);
      setSuccess(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {success ? (
        <p className={styles.confirm}>Check your email to confirm. Thanks!</p>
      ) : (
        <>
          <VisuallyHidden>
            <label htmlFor="name">First name</label>
          </VisuallyHidden>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="First name"
            required={true}
          />
          <VisuallyHidden>
            <label htmlFor="email">Email</label>
          </VisuallyHidden>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required={true}
          />
          <button type="submit" disabled={loading || success}>
            Subscribe
          </button>
        </>
      )}
    </form>
  );
};
