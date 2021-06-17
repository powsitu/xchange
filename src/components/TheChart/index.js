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

export default function TheChart() {
  const data = chartFeeder();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <Area dataKey="value" stroke="#28a745" fill="#20c997" />
        <XAxis
          dataKey="date"
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />
        <YAxis dataKey="value" axisLine={false} />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
