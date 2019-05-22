import { SET_WINDOW_DIMS } from "../actionTypes";

const initialState = {
  height: window.innerHeight,
  width: window.innerWidth
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_WINDOW_DIMS: {
      return action.payload;
    }
    default:
      return state;
  }
}
