import styles from "./header-comp.module.css";

export const headerClassName = styles.header;

export function HeaderComp() {
  return (
    <>
      <div className={`${styles.header_logoWrap} slide-down`}>
        <div className={`${styles.header_payoff} slide-down`}>
          designing an easier way to live&nbsp;
        </div>
        <div className={`${styles.header_logo} slide-down`}>life is simple</div>
      </div>

      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_ul}>
          <li className={`${styles.header_nav_li} slide-down`}>
            <a className={`${styles.header_nav_link} ${styles.fxLink}`} href="#">Home</a>
          </li>
          <li className={`${styles.header_nav_li} slide-down`}>
            <a className={`${styles.header_nav_link} ${styles.fxLink}`} href="/portfolio/index.html">Portfolio</a>
          </li>
          <li className={`${styles.header_nav_li} slide-down`}>
            <a className={`${styles.header_nav_link} ${styles.fxLink}`} href="/lab/index.html">Lab</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
