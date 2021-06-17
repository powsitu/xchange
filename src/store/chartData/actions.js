export const ADD_DAY = "ADD_DAY";

export function addDay(dailyConversion) {
  return {
    type: ADD_DAY,
    payload: dailyConversion,
  };
}
