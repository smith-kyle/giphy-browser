import { SET_QUERY, ADD_GIFS, SET_IS_LOADING } from "./actionTypes";
import fetch from "cross-fetch";
import { gifsUrlSelector } from "./selectors";

export const addGifs = gifs => ({
  type: ADD_GIFS,
  payload: gifs
});

export const setQuery = query => ({
  type: SET_QUERY,
  payload: query
});

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const fetchGifs = () => {
  return (dispatch, getState) => {
    const url = gifsUrlSelector(getState());
    dispatch(setIsLoading(true));
    fetch(url)
      .then(({ data }) => dispatch(addGifs(data)))
      .then(() => setIsLoading(false))
      .catch(e => {
        console.error(e);
        setIsLoading(false);
      });
  };
};
