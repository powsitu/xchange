import { CURRENCIES_FETCHED, RESULT_UPDATED, RATES_FETCHED } from "./actions";

const initialState = {
  availableCurrencies: [],
  availableRates: [],
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
    case RATES_FETCHED:
      return {
        ...state,
        availableRates: action.payload,
      };
    default:
      return state;
  }
}
