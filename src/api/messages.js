import { get, child, ref, push } from "firebase/database";
import { database } from "./firebase";

export const getMessagesApi = () => {
  return get(child(ref(database), "messages"));
};

export const createMessageApi = (message, roomId) => {
  return push(child(ref(database), `messages/${roomId}`), message);
};

// @TODO  перенести в санк
const normilizeData = async () => {
  const messages = {};

  const snapshot = await getMessagesApi();

  snapshot.forEach((snap) => {
    messages[snap.key] = Object.values(snap.val());
  });

  console.log("messages", messages);
};

// export const removeConversationApi = (conversation) => {
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
