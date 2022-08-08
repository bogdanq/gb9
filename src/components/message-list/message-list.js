import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const ref = useRef();

  const sendMessage = () => {
    if (value) {
      setMessageList([
        ...messageList,
        { author: "User", message: value, date: new Date() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
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
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", message: "Hello from Bot", date: new Date() },
        ]);
      }, 500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList]);

  return (
    <>
      <div ref={ref}>
        {messageList.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>

      <Input
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
