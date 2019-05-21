import { SET_QUERY, ADD_GIFS, SET_IS_LOADING } from "./actionTypes";
import fetch from "cross-fetch";
import { gifsUrlSelector } from "./selectors";
import debounce from "lodash.debounce";

export const addGifs = gifs => ({
  type: ADD_GIFS,
  payload: gifs
});

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

const _fetchGifs = (dispatch, getState) => {
  const url = gifsUrlSelector(getState());
  dispatch(setIsLoading(true));
  return fetch(url)
    .then(response => response.json())
    .then(({ data }) => dispatch(addGifs(data)))
    .then(() => setIsLoading(false))
    .catch(e => {
      console.error(e);
      setIsLoading(false);
    });
};

const fetchGifs = debounce(_fetchGifs, 400);

export const setQuery = ({ target: { value: payload } }) => dispatch => {
  dispatch({
    type: SET_QUERY,
    payload
  });
  return dispatch(fetchGifs);
};
