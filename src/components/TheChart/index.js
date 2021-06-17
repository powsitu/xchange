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
import { subDays } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { historicalFetcher } from "../../store/chartData/actions";

function lastSevenDays() {
  const lastThirtyDays = [];
  for (let num = 7; num >= 0; num--) {
    lastThirtyDays.push(subDays(new Date(), num).toISOString().substr(0, 10));
  }
  return lastThirtyDays;
}

export default function TheChart() {
  const dispatch = useDispatch();
  const dataCount = useSelector(countWeeklyConversion);
  const data = useSelector(selectWeeklyConversion);

  useEffect(() => {
    const symbols = ["USD", "GBP"];
    const daysData = lastSevenDays();
    dispatch(historicalFetcher(daysData, symbols));
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
