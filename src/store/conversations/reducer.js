import {
  // CREATE_CONVERSATION,
  // DELETE_CONVERSATION,
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

const initialState = {
  conversations: [],
  pending: false,
  pendingCreate: false,
  pendingRemove: false,
  error: null,
  errorCreate: null,
  errorRemove: null,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CREATE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversations: [...state.conversations, action.payload],
    //   };

    // case DELETE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversations: state.conversations.filter(
    //       (conversation) => conversation !== action.payload
    //     ),
    //   };

    case GET_CONVERSATIONS_START:
      return { ...state, pending: true, error: null };
    case GET_CONVERSATIONS_SUCCESS:
      return { ...state, pending: false, conversations: action.payload };
    case GET_CONVERSATIONS_ERROR:
      return { ...state, pending: false, error: action.payload };

    case CREATE_CONVERSATION_START:
      return { ...state, pendingCreate: true, errorCreate: null };
    case CREATE_CONVERSATION_SUCCESS:
      return {
        ...state,
        pendingCreate: false,
        conversations: [...state.conversations, action.payload],
      };
    case CREATE_CONVERSATION_ERROR:
      return { ...state, pendingCreate: false, errorCreate: action.payload };

    case REMOVE_CONVERSATION_START:
      return { ...state, pendingRemove: true, errorRemove: null };
    case REMOVE_CONVERSATION_SUCCESS:
      return {
        ...state,
        pendingRemove: false,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    case REMOVE_CONVERSATION_ERROR:
      return { ...state, pendingRemove: false, errorRemove: action.payload };

    default:
      return state;
  }
};
