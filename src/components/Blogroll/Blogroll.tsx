import Link from "next/link";
import styles from "./Blogroll.module.css";

const Blogroll = () => {
  return (
    <>
      <h1 className={styles.h1}>Blogroll</h1>
      <p className={styles.p}>
        This is a collection of websites I like, which I first added to my
        garden in January 2024. They are listed alphabetically. I’ll add new
        ones every now and again. Not nearly exhaustive—there’s so much good
        stuff on the internet.
      </p>
      <p className={styles.p}>
        I actually hadn’t heard{" "}
        <Link href="/blogrolls">the word “blogroll”</Link> until 2024. I think{" "}
        <a href="https://manuelmoreale.com/blogroll">Manu Moreale’s blogroll</a>{" "}
        is where I first saw it.{" "}
      </p>
      <h2 className={styles.h2}>Personal blogs I like</h2>
      <ul className={styles.ul}>
        <li>
          <a href="https://jakelazaroff.com/">jakelazaroff.com</a>
        </li>
        <li>
          <a href="https://janefriedman.com/">janefriedman.com</a>
        </li>
        <li>
          <a href="https://www.joshwcomeau.com/">joshwcomeau.com</a>
        </li>
        <li>
          <a href="https://jsomers.net/">jsomers.net</a>
        </li>
        <li>
          <a href="https://jvns.ca/">jvns.ca</a>
        </li>
        <li>
          <a href="https://macwright.com/">macwright.com</a>
        </li>
        <li>
          <a href="https://maggieappleton.com/">maggieappleton.com</a>
        </li>
        <li>
          <a href="https://neal.fun/">neal.fun</a>
        </li>
        <li>
          <a href="https://robinsloan.com/">robinsloan.com</a>
        </li>
        <li>
          <a href="https://sheonhan.net/">sheonhan.net</a>
        </li>
      </ul>
      <h2 className={styles.h2}>Other neat websites</h2>
      <ul className={styles.ul}>
        <li>
          <a href="https://emoji.supply/kitchen/">emoji.supply</a>
        </li>
        <li>
          <a href="https://peopleandblogs.com/">peopleandblogs.com</a>
        </li>
        <li>
          <a href="https://press.stripe.com/">press.stripe.com</a>
        </li>
        <li>
          <a href="https://radio.garden/">radio.garden</a>
        </li>
        <li>
          <a href="https://rotatingsandwiches.com/">rotatingsandwiches.com</a>
        </li>
      </ul>
    </>
  );
};

export default Blogroll;
