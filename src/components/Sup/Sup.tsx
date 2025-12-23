import styles from "./Sup.module.css";

export default function Sup({ children }) {
  return <sup className={styles.sup}>{children}</sup>;
}
