import { ADD_GIFS, CLEAR_GIFS, SET_SELECTED_GIF } from "../actionTypes";

const initialState = {
  gifs: [],
  selectedId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GIFS: {
      return {
        ...state,
        gifs: state.gifs.concat(action.payload)
      };
    }
    case CLEAR_GIFS: {
      return {
        ...state,
        gifs: []
      };
    }
    case SET_SELECTED_GIF: {
      return {
        ...state,
        selectedId: action.payload
      };
    }
    default:
      return state;
  }
}
