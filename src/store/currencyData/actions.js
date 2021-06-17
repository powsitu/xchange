import axios from "axios";
import { API_URL, API_KEY } from "../../constants";

export const CURRENCIES_FETCHED = "CURRENCIES_FETCHED";

const CurrenciesFetched = (currencies) => ({
  type: CURRENCIES_FETCHED,
  payload: currencies,
});

export const availableCurrencies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/latest?access_key=${API_KEY}`
      );
      dispatch(CurrenciesFetched(response.data.rates));
    } catch (error) {
      console.log(error.message);
    }
  };
};
