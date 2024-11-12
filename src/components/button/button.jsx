import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
export default function Button({ text, icon, onClick, type, disabled }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles["button"], styles?.[type])}
    >
      {type === "sign" && icon}
      {text}
      {type === "primary" && icon}
    </button>
  );
}
