import { CURRENCIES_FETCHED, RESULT_UPDATED } from "./actions";

const initialState = {
  availableCurrencies: [],
  conversionResult: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CURRENCIES_FETCHED:
      return {
        ...state,
        availableCurrencies: action.payload,
      };
    case RESULT_UPDATED:
      return {
        ...state,
        conversionResult: action.payload,
      };
    default:
      return state;
  }
}
