import { combineReducers } from "redux";
import currencyData from "./currencyData/reducer";
import chartData from "./chartData/reducer";
import userInput from "./userInput/reducer";

export default combineReducers({
  currencyData,
  chartData,
  userInput,
});
