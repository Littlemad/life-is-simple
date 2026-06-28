"use client";

import { useState } from "react";
import styles from "./switch-comp.module.css";

export type SwitchCompProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  label?: string;
};

export function SwitchComp({
  checked,
  defaultChecked = false,
  onChange,
  className,
  label,
}: SwitchCompProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = event.target.checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  }

  return (
    <label className={[styles.switch, className].filter(Boolean).join(" ")}>
      <span className={styles.switch_track}>
        <input
          suppressHydrationWarning
          type="checkbox"
          className={styles.switch_input}
          checked={isChecked}
          onChange={handleChange}
          aria-label={label}
        />
        <span className={styles.slider} />
      </span>
    </label>
  );
}
