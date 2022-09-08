import {
  CREATE_CONVERSATION,
  DELETE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  CREATE_CONVERSATION_START,
  CREATE_CONVERSATION_ERROR,
  CREATE_CONVERSATION_SUCCESS,
  REMOVE_CONVERSATION_ERROR,
  REMOVE_CONVERSATION_START,
  REMOVE_CONVERSATION_SUCCESS,
} from "./types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});

export const getConversationsStart = () => ({ type: GET_CONVERSATIONS_START });
export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});
export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});

export const createConversationsStart = () => ({
  type: CREATE_CONVERSATION_START,
});
export const createConversationsSuccess = (conversation) => ({
  type: CREATE_CONVERSATION_SUCCESS,
  payload: conversation,
});
export const createConversationsError = (error) => ({
  type: CREATE_CONVERSATION_ERROR,
  payload: error,
});

export const removeConversationsStart = () => ({
  type: REMOVE_CONVERSATION_START,
});
export const removeConversationsSuccess = (conversation) => ({
  type: REMOVE_CONVERSATION_SUCCESS,
  payload: conversation,
});
export const removeConversationsError = (error) => ({
  type: REMOVE_CONVERSATION_ERROR,
  payload: error,
});
