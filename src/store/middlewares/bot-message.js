import { sendMessage, SEND_MESSAGE } from "../messages";

export const botMessage = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === "User"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(action.payload.roomId, {
          author: "Bot",
          message: "hello from middleware",
        })
      );
    }, 1500);
  }

  return next(action);
};
