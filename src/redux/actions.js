import {
  SET_QUERY,
  ADD_GIFS,
  SET_IS_LOADING,
  CLEAR_GIFS,
  SET_SELECTED_GIF,
  SET_SELECTED_GIF_URL
} from "./actionTypes";
import fetch from "cross-fetch";
import { gifsUrlSelector, selectedGifSelector } from "./selectors";
import debounce from "lodash.debounce";

export const addGifs = gifs => ({
  type: ADD_GIFS,
  payload: gifs
});

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const setSelectedGif = id => ({
  type: SET_SELECTED_GIF,
  payload: id
});

export const setSelectedGifUrl = url => ({
  type: SET_SELECTED_GIF_URL,
  payload: url
});

export const selectGif = id => (dispatch, getState) => {
  dispatch(setSelectedGif(id));
  const selectedGif = selectedGifSelector(getState());
  return fetch(selectedGif.images.original.url)
    .then(response => response.blob())
    .then(blob => dispatch(setSelectedGifUrl(URL.createObjectURL(blob))));
};

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

export const fetchGifs = debounce(_fetchGifs, 400);

export const setQuery = ({ target: { value: payload } }) => dispatch => {
  dispatch({
    type: SET_QUERY,
    payload
  });
  dispatch({ type: CLEAR_GIFS });
  dispatch(setIsLoading(true));
  return dispatch(fetchGifs);
};
