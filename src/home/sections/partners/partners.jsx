import React from "react";
import styles from "./partners.module.scss";
import image1 from "assets/images/partners/1.svg";
import image2 from "assets/images/partners/2.svg";
import image3 from "assets/images/partners/3.svg";
import image4 from "assets/images/partners/4.svg";
import image5 from "assets/images/partners/5.svg";
import image6 from "assets/images/partners/6.svg";
const partnerList = [
  {
    id: "1",
    image: image1,
    url: "",
  },
  {
    id: "2",
    image: image2,
    url: "",
  },
  {
    id: "3",
    image: image3,
    url: "",
  },
  {
    id: "4",
    image: image4,
    url: "",
  },
  {
    id: "5",
    image: image5,
    url: "",
  },
  {
    id: "6",
    image: image6,
    url: "",
  },
];
export default function Partners() {
  return (
    <div className={styles["partners"]}>
      <div className="auto__container">
        <div className={styles["partners__inner"]}>
          {partnerList.map((item, index) => {
            return (
              <a href={item.url} className={styles["partnersItem"]} key={index}>
                <img src={item.image} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
