import React, { useState } from "react";
import styles from "./join.module.scss";
import bell from "assets/images/notification.svg";
import { mailIcon } from "base/SVG";
import { emailRegex } from "base/regex";
export default function Join() {
  const [form, setForm] = useState({
    email: "",
  });
  const [error, setError] = useState();
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const handleSubmit = () => {
    if (!emailRegex.test(form.email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className={styles["join"]}>
      <div className="auto__container">
        <div className={styles["join__inner"]}>
          <div className={styles["join__inner-content"]}>
            <div className={styles["join__inner-title"]}>
              <div className={styles["join__inner-title-icon"]}>
                <img src={bell} alt="" />
              </div>
              <h4>
                Subscribe to our newsletter to stay informed about latest
                updates
              </h4>
            </div>
            <div className={styles["join__inner-form"]}>
              <div className={styles["input"]}>
                <input
                  type="text"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
                />
                <span>{mailIcon}</span>
                <button type="button" onClick={handleSubmit}>
                  Subscribe
                </button>
                {error && !emailRegex.test(form.email) && (
                  <div className={styles["errorText"]}>
                    Invalid email address
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
