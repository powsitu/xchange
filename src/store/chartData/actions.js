import axios from "axios";
import { API_URL, API_KEY } from "../../constants";

export const ADD_DAY = "ADD_DAY";

export function AddDay(dailyConversion) {
  return {
    type: ADD_DAY,
    payload: dailyConversion,
  };
}

export function historicalFetcher(daysData, symbols, amount) {
  return async (dispatch) => {
    for (let i = 0; i < daysData.length; i++) {
      try {
        const response = await axios.get(
          `${API_URL}/${daysData[i]}?access_key=${API_KEY}&symbols=${symbols[0]},${symbols[1]}`
        );
        const dailyConversion = {
          date: daysData[i],
          value:
            (amount / response.data.rates[symbols[0]]) *
            response.data.rates[symbols[1]],
        };
        dispatch(AddDay(dailyConversion));
      } catch (error) {
        console.log(error.message);
      }
    }
  };
}
