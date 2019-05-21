import { createSelector } from "reselect";
import * as R from "ramda";
import { appendURLParams } from "./utils";
import {
  GIPHY_SEARCH_URL,
  GIPHY_TRENDING_URL,
  GIPHY_API_KEY
} from "./constants";

export const gifsStateSelector = store => store.gifs;

export const offsetSelector = createSelector(
  gifsStateSelector,
  R.length
);

export const formsStateSelector = store => store.forms;

export const querySelector = createSelector(
  formsStateSelector,
  ({ query }) => query
);

export const isLoadingSelector = createSelector(
  formsStateSelector,
  ({ isLoading }) => isLoading
);

export const shouldUseQuerySelector = createSelector(
  querySelector,
  R.pipe(
    R.equals(""),
    R.not
  )
);

const giphyRequestDefaults = { api_key: GIPHY_API_KEY };

export const gifsUrlSelector = createSelector(
  offsetSelector,
  shouldUseQuerySelector,
  querySelector,
  (offset, shouldUseQuery, query) =>
    shouldUseQuery
      ? appendURLParams(GIPHY_SEARCH_URL, {
          ...giphyRequestDefaults,
          q: query,
          offset
        })
      : appendURLParams(GIPHY_TRENDING_URL, { ...giphyRequestDefaults, offset })
);
