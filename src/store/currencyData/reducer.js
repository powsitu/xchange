import { CURRENCIES_FETCHED } from "./actions";

const initialState = {
  availableCurrencies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CURRENCIES_FETCHED:
      return {
        ...state,
        availableCurrencies: action.payload,
      };
    default:
      return state;
  }
}
