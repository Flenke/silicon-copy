import React from "react";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className="auto__container">
        <div className={styles["footer__inner"]}>
          © 2024 Silicon. All rights reserved. Credit MadrasThemes
        </div>
      </div>
    </div>
  );
}
