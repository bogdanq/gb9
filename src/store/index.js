import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { getPublicApi, searchGistsByNameApi } from "../api/gists";
import {
  createConversationApi,
  getConversationsApi,
  removeConversationApi,
} from "../api/conversations";
import { getMessagesApi, createMessageApi } from "../api/messages";
import { counterReducer } from "./counter";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { logger, timeScheduler, botMessage } from "./middlewares";

const api = {
  getPublicApi,
  searchGistsByNameApi,
  createConversationApi,
  getConversationsApi,
  removeConversationApi,
  getMessagesApi,
  createMessageApi,
};

const persistConfig = {
  key: "gbchat",
  storage,
  whitelist: ["profile"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  })
);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      logger,
      timeScheduler,
      botMessage,
      thunk.withExtraArgument(api)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
