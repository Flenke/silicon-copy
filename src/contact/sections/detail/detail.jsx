import React from "react";
import styles from "./detail.module.scss";
import map from "assets/images/map.png";
import {
  clockIcon,
  facebook,
  instagram,
  phoneIcon,
  pinIcon,
  twitter,
  youtube,
} from "base/SVG";
export default function Detail() {
  return (
    <div className={styles["detail"]}>
      <div className="auto__container">
        <div className={styles["detail__inner"]}>
          <div className={styles["detail__inner-map"]}>
            <img src={map} alt="map" />
          </div>
          <div className={styles["detail__inner-content"]}>
            <div className={styles["detail__inner-content-items"]}>
              <h4>Medical Center 1</h4>
              <div className={styles["detail__inner-content-item"]}>
                <div className={styles["detail__inner-content-item-icon"]}>
                  {pinIcon}
                </div>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
              <div className={styles["detail__inner-content-item"]}>
                <div className={styles["detail__inner-content-item-icon"]}>
                  {phoneIcon}
                </div>
                <p>(406) 555-0120</p>
              </div>
              <div className={styles["detail__inner-content-item"]}>
                <div className={styles["detail__inner-content-item-icon"]}>
                  {clockIcon}
                </div>
                <p>
                  <span>Mon – Fri:</span> 9:00 am – 22:00 am <br />
                  <span>Sat – Sun:</span> 9:00 am – 22:00 am
                </p>
              </div>
            </div>{" "}
            <div className={styles["detail__inner-content-items"]}>
              <h4>Medical Center 2</h4>
              <div className={styles["detail__inner-content-item"]}>
                <div className={styles["detail__inner-content-item-icon"]}>
                  {pinIcon}
                </div>
                <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
              </div>
              <div className={styles["detail__inner-content-item"]}>
                <div className={styles["detail__inner-content-item-icon"]}>
                  {phoneIcon}
                </div>
                <p>(406) 544-0123</p>
              </div>
              <div className={styles["detail__inner-content-item"]}>
                <div className={styles["detail__inner-content-item-icon"]}>
                  {clockIcon}
                </div>
                <p>
                  <span>Mon – Fri:</span> 9:00 am – 22:00 am <br />
                  <span>Sat – Sun:</span> 9:00 am – 22:00 am
                </p>
              </div>
            </div>{" "}
            <div className={styles["detail__inner-content-items"]}>
              <div className={styles["detail__inner-content-socials"]}>
                <a href="">{facebook}</a>
                <a href="">{twitter}</a>
                <a href="">{instagram}</a>
                <a href="">{youtube}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
