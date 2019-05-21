import { SET_QUERY, ADD_GIFS, SET_IS_LOADING, CLEAR_GIFS } from "./actionTypes";
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
  return fetch(url)
    .then(response => response.json())
    .then(({ data }) => dispatch(addGifs(data)))
    .then(() => dispatch(setIsLoading(false)))
    .catch(e => {
      console.error(e);
      dispatch(setIsLoading(false));
    });
};

const fetchGifs = debounce(_fetchGifs, 400);

export const setQuery = ({ target: { value: payload } }) => dispatch => {
  dispatch({
    type: SET_QUERY,
    payload
  });
  dispatch({ type: CLEAR_GIFS });
  dispatch(setIsLoading(true));
  return dispatch(fetchGifs);
};
