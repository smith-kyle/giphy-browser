import { ADD_GIFS, CLEAR_GIFS } from "../actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GIFS: {
      return state.concat(action.payload);
    }
    case CLEAR_GIFS: {
      return [];
    }
    default:
      return state;
  }
}
