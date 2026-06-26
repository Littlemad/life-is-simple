import styles from "./header-comp.module.css";

export const headerClassName = styles.header;

export function HeaderComp() {
  return (
    <>
      <div className={`${styles.header_logoWrap}`}>
        <div className={styles.header_payoff}>designing an easier way to live</div>
        <div className={styles.header_logo}>life is simple</div>
      </div>

      <nav>
        <ul className={styles.header_nav}>
          <li className={styles.header_nav_li}><a className={styles.header_nav_a} href="#">Home</a></li>
          <li className={styles.header_nav_li}><a className={styles.header_nav_a} href="/portfolio/index.html">Portfolio</a></li>
          <li className={styles.header_nav_li}><a className={styles.header_nav_a} href="/lab/index.html">Lab</a></li>
        </ul>
      </nav>
    </>
  );
}
