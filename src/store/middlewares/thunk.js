// redux-thunk
// (payload) => ({ type: "" }) - action
// (payload) => (dispatch, getState, {}) => { api.call() } - thunk

export const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};
