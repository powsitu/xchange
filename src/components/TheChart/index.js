import React, { useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import { format, parseISO } from "date-fns";
import Loading from "../Loading";
import {
  countWeeklyConversion,
  selectWeeklyConversion,
} from "../../store/chartData/selectors";
import axios from "axios";
import { subDays } from "date-fns";
import { API_URL, API_KEY } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addDay } from "../../store/chartData/actions";

function lastSevenDays() {
  const lastThirtyDays = [];
  for (let num = 7; num >= 0; num--) {
    lastThirtyDays.push(subDays(new Date(), num).toISOString().substr(0, 10));
  }
  return lastThirtyDays;
}

async function HistoricalFetcher(daysData, symbols, dispatch) {
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

export default function TheChart() {
  const dispatch = useDispatch();
  const dataCount = useSelector(countWeeklyConversion);
  const data = useSelector(selectWeeklyConversion);

  useEffect(() => {
    const symbols = ["USD", "GBP"];
    const daysData = lastSevenDays();
    HistoricalFetcher(daysData, symbols, dispatch);
  }, [dispatch]);

  return (
    <>
      {dataCount === 0 ? (
        <Loading />
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <Area dataKey="value" stroke="#28a745" fill="#20c997" />
            <XAxis
              dataKey="date"
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 2 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />
            <YAxis dataKey="value" axisLine={false} />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
