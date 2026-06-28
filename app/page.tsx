"use client";

import { useSyncExternalStore } from "react";
import { HeaderComp, headerClassName } from "@/app/component/lib/header-comp/header-comp";
import { SwitchComp } from "@/app/component/lib/switch-comp/switch-comp";
import { TextSlider } from "@/app/component/text-slider/text-slider";
import {
  applyTheme,
  getThemeServerSnapshot,
  getThemeSnapshot,
  subscribeTheme,
} from "@/app/utils/theme-storage";
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
      <header className={headerClassName}>
        <HeaderComp />
      </header>
      <main className={styles.main}>
        {/*
        <div className={styles.welcome}>
          <p>👋 Hi there, I&apos;m Alessio!</p>
        </div>
        */}
   

        <TextSlider />
      </main>

      <SwitchComp className={`${styles.switch} fade-in`} checked={isLight} onChange={handleThemeChange} label="Switch color theme" />
    </>
  );
}
