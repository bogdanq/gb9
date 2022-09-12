import {
  getGists,
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  searchGistsStart,
  searchGistsSuccess,
  searchGistsError,
  searchGists,
} from "../../gists";

describe("get gists thunk", () => {
  it("success", async () => {
    const PAGE = 2;

    const dispatch = jest.fn();
    const getPublicApi = jest.fn().mockResolvedValue({ data: "ok" });

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getPublicApi });

    expect(getPublicApi).toBeCalledWith(PAGE);
    expect(getPublicApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSuccess("ok"));
  });

  it("error", async () => {
    const PAGE = 2;
    const ERROR = { error: "ok" };

    const dispatch = jest.fn();
    const getPublicApi = jest.fn().mockRejectedValue(ERROR);

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getPublicApi });

    expect(getPublicApi).toBeCalledWith(PAGE);
    expect(getPublicApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsError(ERROR));
  });
});

describe("search gists thunk", () => {
  it("success", async () => {
    const NAME = "test";

    const dispatch = jest.fn();
    const searchGistsByNameApi = jest.fn().mockResolvedValue({ data: "ok" });

    const thunk = searchGists(NAME);

    await thunk(dispatch, null, { searchGistsByNameApi });

    expect(searchGistsByNameApi).toBeCalledWith(NAME);
    expect(searchGistsByNameApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, searchGistsSuccess("ok"));
  });

  it("error", async () => {
    const NAME = "test";
    const ERROR = { error: "error" };

    const dispatch = jest.fn();
    const searchGistsByNameApi = jest.fn().mockRejectedValue(ERROR);

    const thunk = searchGists(NAME);

    await thunk(dispatch, null, { searchGistsByNameApi });

    expect(searchGistsByNameApi).toBeCalledWith(NAME);
    expect(searchGistsByNameApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, searchGistsError(ERROR));
  });
});
