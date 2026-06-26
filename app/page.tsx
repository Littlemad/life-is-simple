import { HeaderComp, headerClassName } from "@/app/component/lib/header-comp/header-comp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={headerClassName}>
        <HeaderComp />
      </header>

      <div className={styles.content}>
        <p>content</p>
      </div>
    </main>
  );
}
