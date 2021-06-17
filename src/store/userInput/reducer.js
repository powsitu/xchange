import { ADD_INPUT } from "./actions";

const initialState = {
  currencyFrom: "",
  currencyTo: "",
  amount: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INPUT:
      return {
        ...state,
        currencyFrom: action.payload.currencyFrom,
        currencyTo: action.payload.currencyTo,
        amount: action.payload.amount,
      };
    default:
      return state;
  }
}
