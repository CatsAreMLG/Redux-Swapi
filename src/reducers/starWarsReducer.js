import { LOADING, SUCCESS, ERROR } from "../actions";
const initialState = {
  characters: [],
  loading: true,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        characters: [],
        loading: true,
        error: null
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: null
      };
    case ERROR:
      return {
        ...state,
        characters: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
