import { combineReducers } from "redux";
import currencyData from "./currencyData/reducer";
import chartData from "./chartData/reducer";

export default combineReducers({
  currencyData,
  chartData,
});
