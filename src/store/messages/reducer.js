import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

const initialState = {
  messages: {
    room1: [
      { author: "User", message: "test", date: new Date(), id: nanoid() },
      { author: "Bot", message: "test", date: new Date(), id: nanoid() },
    ],
  },
};

// [...state.message.room1]
// [...state.message[roomId]]
// format(new Date(message?.date), "yyyy-MM-dd HH:MM:SS")

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            { ...action.payload.message, id: nanoid(), date: new Date() },
          ],
        },
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    default:
      return state;
  }
};
