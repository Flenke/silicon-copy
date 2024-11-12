import React, { useState } from "react";
import styles from "./form.module.scss";
import { Link } from "react-router-dom";
import {
  arrowRight,
  doubleChevron,
  homeIcon,
  mailIcon,
  usersPlus,
} from "base/SVG";
import classNames from "classnames";
import { emailRegex } from "base/regex";
export default function Form() {
  const [form, setForm] = useState({
    email: "",
    full_name: "",
  });
  const [error, setError] = useState();
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const handleSubmit = () => {
    if (!emailRegex.test(form.email) || form.full_name) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className={styles["layout"]}>
      <div className="auto__container">
        <div className={styles["layout__routes"]}>
          <Link to="/">{homeIcon} Homepage</Link>
          <i>{doubleChevron}</i>
          <span>Contact</span>
        </div>
        <div className={styles["layout__inner"]}>
          <div className={styles["layout__inner-content"]}>
            <h2>Contact Us</h2>{" "}
            <div className={styles["layout__inner-item"]}>
              <div className={styles["layout__inner-item-icon"]}>
                {mailIcon}
              </div>
              <div className={styles["layout__inner-item-content"]}>
                <h4>Email us</h4>
                <p>
                  Please feel free to drop us a line. We will respond as soon as
                  possible.
                </p>
                <a href="">Leave a message {arrowRight}</a>
              </div>
            </div>{" "}
            <div className={styles["layout__inner-item"]}>
              <div className={styles["layout__inner-item-icon"]}>
                {usersPlus}
              </div>
              <div className={styles["layout__inner-item-content"]}>
                <h4>Careers</h4>
                <p>
                  Sit ac ipsum leo lorem magna nunc mattis maecenas non
                  vestibulum.
                </p>
                <a href="">Send an application {arrowRight}</a>
              </div>
            </div>
          </div>{" "}
          <div className={styles["layout__inner-form"]}>
            <div className={styles["form"]}>
              <div className={styles["form__inner"]}>
                <h3>Get Online Consultation</h3>
                <div className={styles["input__outer"]}>
                  <label htmlFor="">Full name</label>
                  <div
                    className={classNames(styles["input"], {
                      [styles.error]: error && form.full_name === "",
                    })}
                  >
                    <input
                      type="text"
                      placeholder=""
                      value={form.full_name}
                      onChange={(e) =>
                        updateForm({ full_name: e.target.value })
                      }
                    />
                    {error && form.full_name === "" && (
                      <span className={styles["errorText"]}>
                        Please write your full name
                      </span>
                    )}
                  </div>
                </div>{" "}
                <div className={styles["input__outer"]}>
                  <label htmlFor="">Email address</label>
                  <div
                    className={classNames(styles["input"], {
                      [styles.error]: error && !emailRegex.test(form.email),
                    })}
                  >
                    <input
                      type="email"
                      placeholder=""
                      value={form.email}
                      onChange={(e) => updateForm({ email: e.target.value })}
                    />
                    {error && !emailRegex.test(form.email) && (
                      <span className={styles["errorText"]}>
                        Invalid email address
                      </span>
                    )}
                  </div>
                </div>{" "}
                <div className={styles["input__outer"]}>
                  <label htmlFor="">Specialist</label>
                  <div className={styles["input"]}>
                    <select name="" id="">
                      <option value="0">Designer</option>
                      <option value="1">Developer</option>
                      <option value="2">Manager</option>
                      <option value="3">UI UX expert</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="button" onClick={handleSubmit}>
                Make an appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
