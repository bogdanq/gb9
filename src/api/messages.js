import { get, child, ref, push } from "firebase/database";
import { nanoid } from "nanoid";
import { database } from "./firebase";

export const getMessagesApi = () => {
  return get(child(ref(database), "messages"));
};

export const createMessageApi = async (message, roomId) => {
  const newMessage = { ...message, id: nanoid(), date: String(new Date()) };

  await push(child(ref(database), `messages/${roomId}`), newMessage);

  return newMessage;
};

// export const removeMessageApi = (roomId, messageId) => {
//   return remove(child(ref(database), `conversations/${conversation}`));
// };

// const db = {
//   conversations: {
//   },
//   messages: {
//    roomId1: [message1,2,3],
//    roomId2: [message1,2,3],
// }
// }
