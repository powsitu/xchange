import axios from "axios";
import { subDays } from "date-fns";
import { API_URL, API_KEY } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addDay } from "../../store/chartData/actions";

async function HistoricalFetcher(daysData, symbols) {
  const dispatch = useDispatch();

  for (let i = 0; i < daysData.length; i++) {
    try {
      const response = await axios.get(
        `${API_URL}/${daysData[i]}?access_key=${API_KEY}&symbols=${symbols[0]},${symbols[1]}`
      );
      const dailyConversion = {
        date: daysData[i],
        value:
          (1 / response.data.rates[symbols[0]]) *
          response.data.rates[symbols[1]],
      };
      dispatch(addDay(dailyConversion));
    } catch (error) {
      console.log(error.message);
    }
  }
}

function lastSevenDays() {
  const lastThirtyDays = [];
  for (let num = 7; num >= 0; num--) {
    lastThirtyDays.push(subDays(new Date(), num).toISOString().substr(0, 10));
  }
  return lastThirtyDays;
}

export default function chartFeeder() {
  const symbols = ["USD", "GBP"];
  const daysData = lastSevenDays();
  HistoricalFetcher(daysData, symbols);
}
