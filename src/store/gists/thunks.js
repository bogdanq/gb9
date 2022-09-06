import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

export const getGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());

    const { data } = await api.getPublicApi(page);

    dispatch(getGistsSuccess(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};
