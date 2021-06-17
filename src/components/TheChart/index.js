import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}

export default function TheChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <Area dataKey="value" stroke="#28a745" fill="#20c997" />
        <XAxis dataKey="date" />
        <YAxis dataKey="value" axisLine={false} />
        <Tooltip />
        <CartesianGrid opacity={0.1} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
