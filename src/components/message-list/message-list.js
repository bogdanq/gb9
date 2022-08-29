import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import { InputAdornment } from "@mui/material";
import { sendMessage, messagessSelector } from "../../store/messages";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";

// @TODO  переделать как в https://codesandbox.io/s/gbchat-router-7fg2fn?file=/src/App.js:1887-1898
export const MessageList = () => {
  const { roomId } = useParams();

  const selector = useMemo(() => messagessSelector(roomId), [roomId]);

  const messages = useSelector(selector);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const ref = useRef();

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage(roomId, { message, author }));
        setValue("");
      }
    },
    [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        send("hello from bot", "Bot");
      }, 500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [send, messages]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} roomId={roomId} />
        ))}
      </div>

      <Input
        autoFocus
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <SendIcon onClick={send} />}
          </InputAdornment>
        }
      />
    </>
  );
};

// MessageList.propTypes = {
//   message: PropTypes.string.isRequired,
//   o1: PropTypes.shape({
//     s1: PropTypes.string.isRequired,
//   }).isRequired,
//   a: PropTypes.arrayOf(
//     PropTypes.shape({
//       s1: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
