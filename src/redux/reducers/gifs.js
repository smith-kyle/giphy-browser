import {
  ADD_GIFS,
  CLEAR_GIFS,
  SET_SELECTED_GIF,
  SET_SELECTED_GIF_URL
} from "../actionTypes";

const initialState = {
  gifs: [],
  selectedId: null,
  selectedUrl: null
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
    case SET_SELECTED_GIF_URL: {
      return {
        ...state,
        selectedUrl: action.payload
      };
    }
    default:
      return state;
  }
}
