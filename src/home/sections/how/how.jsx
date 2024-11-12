import React from "react";
import styles from "./how.module.scss";
import Slider from "react-slick";
import frame from "assets/images/how/phone.png";
import slide1 from "assets/images/how/1.png";
import slide2 from "assets/images/how/2.png";
import slide3 from "assets/images/how/3.png";
const howList = [
  {
    id: "1",
    image: slide1,
  },
  {
    id: "2",
    image: slide2,
  },
  {
    id: "3",
    image: slide3,
  },
  {
    id: "4",
    image: slide1,
  },
  {
    id: "5",
    image: slide2,
  },
  {
    id: "6",
    image: slide3,
  },
];
export default function How() {
  const settings = {
    slidesToShow: 3,

    infinite: true,
    dots: false,
    arrows: false,
    centerPadding: "0",
    centerMode: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles["how"]}>
      <div className="auto__container">
        <div className={styles["how__inner"]}>
          <div className={styles["how__inner-title"]}>
            <h2>How Does It Work?</h2>
          </div>
          <div className={styles["how__inner-items"]}>
            <div className={styles["how__inner-frame"]}>
              <img src={frame} alt="frame" />
            </div>
            <Slider {...settings}>
              {howList.map((item, index) => {
                return (
                  <div className={styles["howItem"]} key={index}>
                    <div className={styles["howItem__image"]}>
                      <img src={item.image} alt="image" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className={styles["how__inner-foot"]}>
            <h4> Latest transaction history</h4>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
              Arcu sociis tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
