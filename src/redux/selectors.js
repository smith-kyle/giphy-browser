import { createSelector } from "reselect";
import * as R from "ramda";
import { appendURLParams } from "./utils";

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

export const shouldUseQuerySelector = createSelector(
  querySelector,
  R.pipe(
    R.equals(""),
    R.not
  )
);

export const gifsUrlSelector = createSelector(
  offsetSelector,
  shouldUseQuerySelector,
  (offset, shouldUseQuery) =>
    shouldUseQuery
      ? appendURLParams(GIPHY_SEARCH_URL, { q: query, offset })
      : appendURLParams(GIPHY_TRENDING_URL, { offset })
);
