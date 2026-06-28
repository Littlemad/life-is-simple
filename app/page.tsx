"use client";

import { useSyncExternalStore } from "react";
import { HeaderComp, headerClassName } from "@/app/component/lib/header-comp/header-comp";
import { SwitchComp } from "@/app/component/lib/switch-comp/switch-comp";
import {
  applyTheme,
  getThemeServerSnapshot,
  getThemeSnapshot,
  subscribeTheme,
} from "@/app/lib/theme-storage";
import styles from "./page.module.css";

export default function Home() {
  const isLight = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  function handleThemeChange(checked: boolean) {
    applyTheme(checked ? "light" : "dark");
  }

  return (
    <>
      <main className={styles.main}>
        <header className={headerClassName}>
          <HeaderComp />
        </header>

        <div className={styles.content}>
          <p>content</p>
        </div>
      </main>

      <SwitchComp className={`${styles.switch} fade-in`} checked={isLight} onChange={handleThemeChange} label="Switch color theme" />
    </>
  );
}
