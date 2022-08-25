import React, { useState, useEffect, useRef, useCallback } from "react";
// import PropTypes from "prop-types";
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";
import { useParams } from "react-router-dom";

// @TODO  переделать как в https://codesandbox.io/s/gbchat-router-7fg2fn?file=/src/App.js:1887-1898
export const MessageList = () => {
  const [messageList, setMessageList] = useState({
    room1: [{ author: "User", message: "test", date: new Date() }],
  });
  const [value, setValue] = useState("");

  const { roomId } = useParams();

  const ref = useRef();

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList((state) => ({
          ...state,
          [roomId]: [
            ...(state[roomId] ?? []),
            { author, message, date: new Date() },
          ],
        }));
        setValue("");
      }
    },
    [roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
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
  }, [messageList]);

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage("hello from bot", "Bot");
      }, 500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList, roomId, sendMessage]);

  const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
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
            {value && <SendIcon onClick={sendMessage} />}
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
