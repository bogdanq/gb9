import { List } from "@mui/material";
import { useCallback, useState } from "react";
import { Chat } from "./chat";

// @TODO переделать на роутер (использовать NavLink to={`/chat/${chat}`})
export const ChatList = () => {
  const [chatList] = useState(["room1", "room2", "room3"]);
  const [selectedRoom, setSeledRoom] = useState("room1");

  const handleListItemClick = useCallback((room) => {
    setSeledRoom(room);
  }, []);

  return (
    <List component="nav">
      {chatList.map((chat) => (
        <Chat
          key={chat}
          title={chat}
          selected={chat === selectedRoom}
          handleListItemClick={handleListItemClick}
        />
      ))}
    </List>
  );
};
