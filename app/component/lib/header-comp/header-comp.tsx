"use client";

import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import styles from "./header-comp.module.css";

export const headerClassName = styles.header;

export function HeaderComp() {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-mount flag to avoid SSR hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className={`${styles.header_logoWrap} slide-down`}>
        {mounted && (
          <MediaQuery minWidth="36rem">
            <div className={`${styles.header_payoff} slide-down`}>
              designing an easier way to live&nbsp;
            </div>
          </MediaQuery>
        )}
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
