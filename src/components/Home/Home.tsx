import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Code from "@/components/Code";
import CommandBar from "@/components/CommandBar";
import VisuallyHidden from "@/components/VisuallyHidden";
import useIsWindowsOrFirefox from "@/hooks/useIsWindowsOrFirefox.hook";
import styles from "./Home.module.css";
import cake from "@/images/cake.svg";
import nature from "@/images/nature.svg";
import malleable from "@/images/malleable.svg";
import yu from "@/images/yu.svg";
import weeks from "@/images/weeks-of-your-life.svg";

export default function Home() {
  const isWindowsOrFirefox = useIsWindowsOrFirefox();

  return (
    <div className={styles.intro}>
      <h1 className={styles.h1}>
        <span>Pete Millspaugh</span> » Programmer & writer in Cincinnati, Ohio.
      </h1>

      <p className={styles.p}>
        I’m writing a book about{" "}
        <a href="https://dotcom.press">the secret life of internet domains</a>{" "}
        and working part-time on the joy of programming at{" "}
        <a href="https://val.town">Val Town</a>. You’ve found my digital
        garden—welcome.
      </p>
      <Newsletter />

      <p className={styles.p}>
        You’re welcome to explore the full <Link href="/garden">garden</Link> or{" "}
        read more <Link href="/about">about</Link> it. Tug on the edison bulb
        (top right) to turn off the lights, and press{" "}
        <Code>{isWindowsOrFirefox ? "⌃" : "⌘"}+K</Code> to search. You’ll find
        over 100 scraps of writing planted in the garden—here’s a selection that
        readers seem to like:
      </p>

      <section className={styles.featured}>
        <a href="https://dotcom.press/history-of-domains">
          <Image
            src={cake}
            alt="illustration of a birthday cake for the 40th anniversary of .com"
            width={300}
            height={300}
          />
          <div>
            <h3>A brief history of domains</h3>
            <p>This year, dot com turned 40.</p>
          </div>
        </a>
        <Link href="/the-nature-of-the-job">
          <Image src={nature} alt="illustration of" width={300} height={300} />
          <div>
            <h3>The nature of the job</h3>
            <p>A cathartic essay about a programmer’s relationship with AI.</p>
          </div>
        </Link>
        <a href="https://dotcom.press/archive/eminent-domains">
          <Image
            src={yu}
            alt="illustration of a gravestone for Yugoslavia's internet domain"
            width={300}
            height={300}
          />
          <div>
            <h3>Eminent domains</h3>
            <p>
              When domains go dark and countries reclaim their digital land.
            </p>
          </div>
        </a>
        <Link href="/malleable-garden">
          <Image
            src={malleable}
            alt="illustration of"
            width={300}
            height={300}
          />
          <div>
            <h3>A malleable garden</h3>
            <p>What could you plant in a malleable garden?</p>
          </div>
        </Link>
        <a href="https://weeksofyour.life">
          <Image
            src={weeks}
            alt="illustration of a grid of blocks spelling out weeks of your life"
            width={300}
            height={300}
          />
          <div>
            <h3>Weeks of your life</h3>
            <p>An interactive visualization of your life, week by week.</p>
          </div>
        </a>
      </section>

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
