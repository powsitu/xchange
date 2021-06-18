import { ADD_DAY, RESET } from "./actions";

const initialState = {
  weekly: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DAY:
      return {
        ...state,
        weekly: [
          ...state.weekly,
          {
            date: action.payload.date,
            value: action.payload.value,
          },
        ],
      };
    case RESET:
      return {
        ...state,
        weekly: initialState.weekly,
      };
    default:
      return state;
  }
}
