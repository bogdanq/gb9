import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
} from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, { author: "Bot", message: "hello from thunk" })
      );
    }, 500);
  }
};

export const getMessages = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const sendMessageFb = (message, roomId) => async (dispatch, _, api) => {
  try {
    // dispatch(getMessagesStart());

    const newMessage = await api.createMessageApi(message, roomId);

    dispatch(sendMessageWithBot(roomId, newMessage));

    // dispatch(getMessagesSuccess(messages));
  } catch (e) {
    // dispatch(getMessagesError(e));
  }
};
