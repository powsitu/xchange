import ADD_DAY from "./actions";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DAY:
      return {
        ...state,
        state: [
          {
            date: action.payload.date,
            value: action.payload.value,
          },
        ],
      };
    default:
      return state;
  }
}
