import React from "react";
import styles from "./about.module.scss";
import { arrowRight, cardIcon, tickIcon, walletIcon } from "base/SVG";
import Button from "components/button/button";
import about1 from "assets/images/about1.png";
import about2 from "assets/images/about2.png";
export default function About() {
  return (
    <div className={styles["about"]}>
      <div className="auto__container">
        <div className={styles["about__inner"]}>
          <div className={styles["about__inner-content"]}>
            <h3>
              Make your money <br /> transfer simple and clear
            </h3>
            <ul>
              <li>
                {tickIcon}
                Banking transactions are free for you
              </li>{" "}
              <li>
                {tickIcon}
                No monthly cash commission
              </li>{" "}
              <li>
                {tickIcon}
                Manage payments and transactions online
              </li>
            </ul>
            <Button type={"primary"} icon={arrowRight} text={"Learn more"} />
          </div>
          <div className={styles["about__inner-image"]}>
            <img src={about1} alt="about" />
          </div>
        </div>{" "}
        <div className={styles["about__inner"]}>
          <div className={styles["about__inner-image"]}>
            <img src={about2} alt="about" />
          </div>
          <div className={styles["about__inner-content"]}>
            <h3>Receive payment from <br /> international bank details</h3>
            <div className={styles["about__inner-items"]}>
              <div className={styles["about__inner-item"]}>
                <div className={styles["about__inner-item-icon"]}>
                  {cardIcon}
                </div>
                <p>
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </div>
              <div className={styles["about__inner-item"]}>
                <div className={styles["about__inner-item-icon"]}>
                  {walletIcon}
                </div>
                <p>
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </div>
            </div>
            <Button type={"primary"} icon={arrowRight} text={"Learn more"} />
          </div>
        </div>
      </div>
    </div>
  );
}
