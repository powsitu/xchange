import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import { format, parseISO } from "date-fns";
import chartFeeder from "../chartFeeder";
import Loading from "../Loading";

export default function TheChart() {
  const data = chartFeeder();
  console.log(data);

  return (
    <>
      {data.length !== 8 ? (
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
