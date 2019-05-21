import { SET_IS_LOADING, SET_QUERY } from "../actionTypes";

const initialState = {
  query: "",
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY: {
      return {
        ...state,
        query: action.payload
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
}
