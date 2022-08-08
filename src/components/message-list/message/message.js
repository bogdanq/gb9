import classNames from "classnames";
import styles from "./message.module.css";

export function Message({ message }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>12.03</p>
    </div>
  );
}
