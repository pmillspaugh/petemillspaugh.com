import styles from "./Sup.module.css";

export default function Sup({ children, id }) {
  return (
    <sup className={styles.sup} id={id}>
      {children}
    </sup>
  );
}
