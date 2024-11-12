import React from "react";
import styles from "./features.module.scss";
import features from "assets/images/features.png";
import {
  cardIcon,
  chatsIcon,
  secureIcon,
  smileIcon,
  statIcon,
  walletIcon,
} from "base/SVG";
const featuresList = [
  {
    id: "1",
    title: "Easy Payments",
    icon: cardIcon,
    text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
  },
  {
    id: "2",
    title: "Data Security",
    icon: secureIcon,
    text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. ",
  },
  {
    id: "3",
    title: "Cost Statistics",
    icon: statIcon,
    text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
  },
  {
    id: "4",
    title: "Support 24/7",
    icon: chatsIcon,
    text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.",
  },
  {
    id: "5",
    title: "Regular Cashback",
    icon: walletIcon,
    text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
  },
  {
    id: "6",
    title: "Top Standards",
    icon: smileIcon,
    text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
  },
];
export default function Features() {
  return (
    <div className={styles["features"]}>
      <div className="auto__container">
        <div className={styles["features__inner"]}>
          <div className={styles["features__inner-image"]}>
            <img src={features} alt="features" />
          </div>
          <div className={styles["features__inner-content"]}>
            <div className={styles["features__inner-content-head"]}>
              <h2>App Features</h2>
              <p className="large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                volutpat mollis egestas. Nam luctus facilisis ultrices.
                Pellentesque volutpat ligula est. Mattis fermentum, at nec
                lacus.
              </p>
            </div>

            <div className={styles["features__inner-items"]}>
              {featuresList.map((item, index) => {
                return (
                  <div className={styles["featuresItem"]} key={index}>
                    <div className={styles["featuresItem__icon"]}>
                      {item.icon}
                    </div>
                    <div className={styles["featuresItem__content"]}>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
