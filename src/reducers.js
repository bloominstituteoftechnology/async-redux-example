import { IS_FETCHING, DOGS_FETCHED, ERROR_FETCHING_DOGS } from './actions';
const initialState = {
  dogs: [],
  fetching: false,
  fetched: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetching: true };
    case DOGS_FETCHED:
      console.log('DOOOOGS: ', action.payload);
      return {
        ...state,
        fetched: true,
        fetching: false,
        dogs: Object.keys(action.payload)
      };
    case ERROR_FETCHING_DOGS:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
