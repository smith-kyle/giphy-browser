import { createSelector } from "reselect";
import * as R from "ramda";

import { appendURLParams } from "./utils";
import {
  GIPHY_SEARCH_URL,
  GIPHY_TRENDING_URL,
  GIPHY_API_KEY
} from "../constants";

export const windowStateSelector = store => store.window;

export const windowWidthSelector = createSelector(
  windowStateSelector,
  ({ width }) => width
);

export const windowHeightSelector = createSelector(
  windowStateSelector,
  ({ height }) => height
);

export const gifsStateSelector = store => store.gifs;

export const gifsSelector = createSelector(
  gifsStateSelector,
  ({ gifs }) => gifs
);

export const gifsByIdSelector = createSelector(
  gifsSelector,
  R.reduce((acc, { id, ...rest }) => ({ ...acc, [id]: { id, ...rest } }), {})
);

export const uniqueGifsSelector = createSelector(
  gifsByIdSelector,
  gifsById =>
    R.pipe(
      R.keys,
      R.map(id => gifsById[id])
    )(gifsById)
);

export const selectedGifSelector = createSelector(
  gifsStateSelector,
  gifsByIdSelector,
  ({ selectedId }, gifsById) =>
    selectedId === null ? null : gifsById[selectedId]
);

export const selectedGifUrlSelector = createSelector(
  gifsStateSelector,
  ({ selectedUrl }) => selectedUrl
);

export const offsetSelector = createSelector(
  gifsSelector,
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
