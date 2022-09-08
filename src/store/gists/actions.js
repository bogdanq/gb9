import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  SEARCH_GISTS_ERROR,
  SEARCH_GISTS_START,
  SEARCH_GISTS_SUCCESS,
} from "./types";

export const getGistsStart = () => ({ type: GET_GISTS_START });
export const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists,
});
export const getGistsError = (error) => ({
  type: GET_GISTS_ERROR,
  payload: error,
});

export const searchGistsStart = () => ({ type: SEARCH_GISTS_START });
export const searchGistsSuccess = (gists) => ({
  type: SEARCH_GISTS_SUCCESS,
  payload: gists,
});
export const searchGistsError = (error) => ({
  type: SEARCH_GISTS_ERROR,
  payload: error,
});
