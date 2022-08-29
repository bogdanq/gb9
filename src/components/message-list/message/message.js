import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import styles from "./message.module.css";

export function Message({ message, roomId }) {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>12.03</p>
      <button onClick={() => dispatch(deleteMessage(roomId, message.id))}>
        x
      </button>
    </div>
  );
}
