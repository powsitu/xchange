import axios from "axios";
import { subDays } from "date-fns";
import { API_URL, API_KEY } from "../../constants";

async function historicalFetcher(daysData, symbols) {
  for (let i = 0; i < daysData.length; i++) {
    try {
      const response = await axios.get(
        `${API_URL}/${daysData[i].date}?access_key=${API_KEY}&symbols=${symbols}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default function chartFeeder() {
  const symbols = "USD,GBP";
  const lastThirtyDays = [];
  for (let num = 30; num >= 0; num--) {
    lastThirtyDays.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      // value: 1 + Math.random(),
    });
  }

  historicalFetcher(lastThirtyDays, symbols);

  return lastThirtyDays;
}
