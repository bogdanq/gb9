import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  createConversationsStart,
  createConversationsError,
  createConversationsSuccess,
  removeConversationsStart,
  removeConversationsSuccess,
  removeConversationsError,
} from "./actions";

export const getConversations = () => async (dispatch, _, api) => {
  const conversations = [];

  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationsApi();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const createConversationByName =
  (conversation) => async (dispatch, _, api) => {
    try {
      dispatch(createConversationsStart());

      await api.createConversationApi(conversation);

      dispatch(createConversationsSuccess(conversation));
    } catch (e) {
      dispatch(createConversationsError(e));
    }
  };

export const removeConversationByName =
  (conversation) => async (dispatch, _, api) => {
    try {
      dispatch(removeConversationsStart());

      await api.removeConversationApi(conversation);

      dispatch(removeConversationsSuccess(conversation));
    } catch (e) {
      dispatch(removeConversationsError(e));
    }
  };
