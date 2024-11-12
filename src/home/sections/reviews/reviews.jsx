import React, { useEffect, useState } from "react";
import styles from "./reviews.module.scss";
import { quoteIcon } from "base/SVG";
import { instance } from "index";
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const getTestimonials = async () => {
    try {
      const result = await instance.get(`/testimonials`);
      if (result?.status === 200) {
        setReviews(result?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className={styles["reviews"]}>
      <div className="auto__container">
        <div className={styles["reviews__inner"]}>
          <div className={styles["reviews__inner-title"]}>
            <h2>Clients are Loving Our App</h2>
          </div>
          <div className={styles["reviews__inner-items"]}>
            {reviews?.slice(0, 2)?.map((item, index) => {
              return <ReviewsItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const ReviewsItem = (props) => {
  return (
    <div className={styles["reviewsItem"]}>
      <div className={styles["reviewsItem__icon"]}>{quoteIcon}</div>
      <div className={styles["reviewsItem__inner"]}>
        <div className={styles["reviewsItem__inner-content"]}>
          <div className={styles["rating"]}>
            <div
              className={styles["rating__inner"]}
              style={{ width: `${(props?.starRating * 100) / 5}%` }}
            ></div>
          </div>
          <p className="large">{props?.comment}</p>
        </div>
        <div className={styles["reviewsItem__info"]}>
          <div className={styles["reviewsItem__info-avatar"]}>
            <img src={props?.avatarUrl} alt="avatar" />
          </div>
          <div className={styles["reviewsItem__info-text"]}>
            <h6>{props?.author}</h6>
            <p className="sm">{props?.jobRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
