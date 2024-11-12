import React from "react";
import styles from "./intro.module.scss";
import intro from "assets/images/intro.png";
import { chevronBottom } from "base/SVG";
export default function Intro() {
  return (
    <div className={styles["intro"]}>
      <div className="auto__container">
        <div className={styles["intro__inner"]}>
          <div className={styles["intro__inner-content"]}>
            <div className={styles["intro__inner-content-text"]}>
              <h1>Manage All Your Money in One App</h1>
              <p className="large">
                We offer you a new generation of the mobile banking. Save, spend
                & manage money in your pocket.
              </p>
              <div className={styles["intro__inner-btns"]}>
                <button className={styles["apple"]} type="button"></button>
                <button className={styles["google"]} type="button"></button>
              </div>
            </div>
            <a
              href="#features"
              className={styles["intro__inner-content-anchor"]}
            >
              <span>{chevronBottom}</span> Discover more
            </a>
          </div>
          <div className={styles["intro__inner-image"]}>
            <img src={intro} alt="intro" />
          </div>
        </div>
      </div>
    </div>
  );
}
