import React, { useEffect, useState } from "react";
import styles from "./faq.module.scss";
import { arrowRight, chatIcon, chevronBottom, phoneIcon } from "base/SVG";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { instance } from "index";
export default function Faq() {
  const [isOpen, setIsOpen] = useState("1");
  const [faqs, setFaqs] = useState([]);
  const getFaqs = async () => {
    try {
      const result = await instance.get(`/faq`);
      console.log(result);
      if (result?.status === 200) {
        setFaqs(result?.data);
      }
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getFaqs();
  }, []);
  return (
    <div className={styles["faq"]}>
      <div className="auto__container">
        <div className={styles["faq__inner"]}>
          <div className={styles["faq__inner-content"]}>
            <h3>
              Any questions? <br /> Check out the FAQs
            </h3>
            <p className="large">
              Still have unanswered questions and need to get in touch?
            </p>
            <div className={styles["faq__inner-actions"]}>
              <div className={styles["faq__inner-action"]}>
                <div className={styles["faq__inner-action-icon"]}>
                  {phoneIcon}
                </div>
                <p className="sm">Still have questions?</p>
                <a href="">Contact us {arrowRight}</a>
              </div>{" "}
              <div className={styles["faq__inner-action"]}>
                <div className={styles["faq__inner-action-icon"]}>
                  {chatIcon}
                </div>
                <p className="sm">Don't like phone calls?</p>
                <a href="">Contact us {arrowRight}</a>
              </div>
            </div>
          </div>
          <div className={styles["faq__inner-items"]}>
            {faqs.map((item, index) => {
              return (
                <FaqItem
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  itemData={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const FaqItem = ({ itemData, isOpen, setIsOpen }) => {
  return (
    <div className={styles["faqItem"]}>
      <div
        className={classNames(styles["faqItem__head"], {
          [styles.active]: isOpen === itemData.id,
        })}
        onClick={() => {
          if (isOpen !== itemData.id) {
            setIsOpen(itemData.id);
          } else {
            setIsOpen(null);
          }
        }}
      >
        <h6>{itemData?.title}</h6>
        <button type="button">{chevronBottom}</button>
      </div>
      <AnimatePresence>
        {isOpen === itemData.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, height: 0 }}
            className={styles["faqItem__body"]}
          >
            {itemData?.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
