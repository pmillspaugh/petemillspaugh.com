import { useState } from "react";
import Link from "next/link";
import Code from "@/components/Code";
import CommandBar from "@/components/CommandBar";
import VisuallyHidden from "@/components/VisuallyHidden";
import useIsWindowsOrFirefox from "@/hooks/useIsWindowsOrFirefox.hook";
import styles from "./Home.module.css";

export default function Home({ numPosts }) {
  const isWindowsOrFirefox = useIsWindowsOrFirefox();

  return (
    <div>
      <h1 className={styles.h1}>Pete Millspaugh—programmer, writer</h1>

      <p className={styles.p}>
        I’m writing a <a href="https://dotcom.press">book</a> about{" "}
        <em>The Secret Life of Internet Domains</em> and working at{" "}
        <a href="https://val.town">val.town</a>. This is my{" "}
        <Link href="/about#garden">digital garden</Link>—welcome! Tug on the
        edison bulb to turn off the lights,{" "}
        <Code>{isWindowsOrFirefox ? "⌃" : "⌘"}+K</Code> to search, trees and
        links in the footer. Contact me at pete@petemillspaugh.com
      </p>

      <h2 className={styles.h2}>Writing</h2>
      <p className={styles.p}>
        There are {numPosts} pieces of writing planted in{" "}
        <Link href="/garden">the garden</Link>. Here’s a sampling of my work
        from the garden and elsewhere.
      </p>

      <h3 className={styles.h3}>Domains</h3>
      <ul className={styles.ul}>
        <li>
          <a href="https://dotcom.press/history-of-domains">
            A Brief History of Domains
          </a>{" "}
          ✦
        </li>
        <li>
          <a href="https://www.dotcom.press/archive/anguilla">
            You can’t spell Anguilla without AI
          </a>
        </li>
        <li>
          <a href="https://www.dotcom.press/archive/icann84">
            ICANN is not a boring bureaucracy
          </a>
        </li>
        <li>
          <a href="https://www.dotcom.press/archive/internet-handle">
            Your domain is your “internet handle”
          </a>
        </li>
        <li>
          <a href="https://dotcom.press/tld-wiki">TLD Wiki</a> ✦
        </li>
      </ul>

      <h3 className={styles.h3}>Programming</h3>
      <ul className={styles.ul}>
        <li>
          <Link href="/the-nature-of-the-job">The nature of the job</Link>
        </li>
        <li>
          <a href="https://weeksofyour.life">Weeks of your life</a> ✦
        </li>
        <li>
          <Link href="/malleable-garden">A malleable garden</Link>
        </li>
        <li>
          <Link href="/edison-bulb">Edison bulb</Link>
        </li>
        <li>
          <Link href="/cultivating-emails">Cultivating email</Link>
        </li>
      </ul>

      <h3 className={styles.h3}>Concepts</h3>
      <ul className={styles.ul}>
        <li>
          <Link href="/unhurried-ambition">Unhurried ambition</Link>
        </li>
        <li>
          <Link href="/present-you">Present you</Link>
        </li>
        <li>
          <Link href="/think-small">Think small</Link>
        </li>
        <li>
          <Link href="/words">Shwords</Link>
        </li>
        <li>
          <Link href="/editorial-rigor">Editorial rigor</Link>
        </li>
        <li>
          <Link href="/my-next-next-next-job">My next, next, next job</Link>
        </li>
      </ul>

      <h3 className={styles.h3}>Books</h3>
      <ul className={styles.ul}>
        <li>
          <Link href="/write-your-book-like-youd-run-a-startup">
            Write your book like you’d run a startup
          </Link>{" "}
          ✦
        </li>
        <li>
          <Link href="/a-small-matter-of-programming">
            A Small Matter of Programming
          </Link>
        </li>
        <li>
          <Link href="/on-writing-stephen-king">On Writing</Link>
        </li>
        <li>
          <Link href="/the-design-of-books">The Design of Books</Link>
        </li>
      </ul>

      <h2 className={styles.h2}>Newsletter</h2>
      <p className={styles.p}>
        Subscribe to read <Link href="/garden?formats=Clipping">clippings</Link>{" "}
        from the garden every ~few months.
      </p>

      <Newsletter />

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
