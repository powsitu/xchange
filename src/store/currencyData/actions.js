import axios from "axios";
import { API_URL, API_KEY } from "../../constants";

export const CURRENCIES_FETCHED = "CURRENCIES_FETCHED";
export const RESULT_UPDATED = "RESULT_UPDATED";
export const RATES_FETCHED = "RATES_FETCHED";

const CurrenciesFetched = (currencies) => ({
  type: CURRENCIES_FETCHED,
  payload: currencies,
});

const RatesFetched = (rates) => ({
  type: RATES_FETCHED,
  payload: rates,
});

export const updateResult = (conversionResult) => ({
  type: RESULT_UPDATED,
  payload: conversionResult,
});

export const availableCurrencies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/symbols?access_key=${API_KEY}`
      );
      dispatch(CurrenciesFetched(response.data.symbols));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const availableRates = (date) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/${date}?access_key=${API_KEY}`
      );
      dispatch(RatesFetched(response.data.rates));
    } catch (error) {
      console.log(error.message);
    }
  };
};
