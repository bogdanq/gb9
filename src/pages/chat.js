import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MessageList, Layout, ChatList } from "../components";
import { getConversations } from "../store/conversations";
import { getMessages } from "../store/messages";

export const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [navigate]);

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              messages={<h1 style={{ color: "#fff" }}>Выберите чат</h1>}
              chats={<ChatList />}
            />
          }
        />
        <Route
          path=":roomId"
          element={<Layout messages={<MessageList />} chats={<ChatList />} />}
        />
      </Routes>
    </>
  );
};
