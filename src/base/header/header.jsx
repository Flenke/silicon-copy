import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import { logo, userIcon } from "base/SVG";
import CheckToggle from "components/check-toggle/check-toggle";
import Button from "components/button/button";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const header = useRef();
  const location = useLocation();
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  useEffect(() => {
    function scrollFunc() {
      if (window.scrollY >= 60) {
        setIsSticky(true);
      } else setIsSticky(false);
    }
    window.addEventListener("scroll", function () {
      scrollFunc();
    });
    return () => {
      window.removeEventListener("scroll", function () {
        scrollFunc();
      });
    };
  }, []);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  return (
    <div
      className={classNames(styles["header"], {
        [styles.sticky]: isSticky,
      })}
      ref={header}
    >
      <div className="auto__container">
        <div className={styles["header__inner"]}>
          <Link to="" className={styles["header__inner-logo"]}>
            {logo}
          </Link>
          <div
            onClick={close}
            className={classNames(styles["nav"], {
              [styles.active]: menu,
            })}
          >
            <div className={styles["nav__inner"]}>
              <div className={styles["nav__inner-links"]}>
                <a href="">Features</a>
                <Link to="/contact">Contact</Link>
              </div>
              <div className={styles["nav__inner-action"]}>
                <CheckToggle />
                <Button icon={userIcon} text="Sign in / up" type={"sign"} />
              </div>
            </div>
          </div>
          <div
            className={classNames(styles["burger"], {
              [styles.active]: menu,
            })}
            onClick={() => setMenu(!menu)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
