"use client";

import { useEffect, useState } from "react";
import styles from "./text-slider.module.css";

const items = ["I design.", "I build.", "I simplify."];
const interval = 2500;

export function TextSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, []);

  return (
    <span key={index} className={`${styles.slider} fade-in`}>
      {items[index]}
    </span>
  );
}
