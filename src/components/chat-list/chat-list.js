import { List } from "@mui/material";
import { useCallback, useState } from "react";
import { Chat } from "./chat";

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
