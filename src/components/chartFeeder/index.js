import axios from "axios";
import { subDays } from "date-fns";
import { API_URL, API_KEY } from "../../constants";

async function historicalFetcher(daysData, symbols) {
  const chartData = [];
  for (let i = 0; i < daysData.length; i++) {
    try {
      const response = await axios.get(
        `${API_URL}/${daysData[i]}?access_key=${API_KEY}&symbols=${symbols[0]},${symbols[1]}`
      );
      chartData.push({
        date: daysData[i],
        value:
          (1 / response.data.rates[symbols[0]]) *
          response.data.rates[symbols[1]],
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return chartData;
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
  historicalFetcher(daysData, symbols);
}
