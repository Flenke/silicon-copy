import React, { useEffect, useRef, useState } from "react";
import styles from "./check-toggle.module.scss";
export default function CheckToggle() {
  const [checked, setChecked] = useState(false);
  const switchCheck = useRef(null);
  useEffect(() => {
    if (switchCheck.current) {
      const storageThemeState = localStorage.getItem("theme");
      if (storageThemeState !== null) {
        document.documentElement.setAttribute("data-theme", storageThemeState);
        if (storageThemeState === "light") {
          setChecked(false);
        } else {
          setChecked(true);
        }
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        setChecked(false);
      }
    }
  }, [switchCheck]);
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    setChecked(e.target.checked);
  };
  return (
    <div className={styles["check__outer"]}>
      {checked ? <span>Light Mode</span> : <span>Dark Mode</span>}
      <div className={styles["check"]}>
        <input
          type="checkbox"
          ref={switchCheck}
          checked={checked}
          onChange={switchTheme}
        />
        <label htmlFor=""></label>
      </div>
    </div>
  );
}
