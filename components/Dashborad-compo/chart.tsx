"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
const data = [
  {
    name: "Item 1",
    total: Math.floor(Math.random() * 5000) + 1000,
    total2: Math.floor(Math.random() * 5000) + 400,
  },
  {
    name: "Item 2",
    total: Math.floor(Math.random() * 5000) + 1000,
    total2: Math.floor(Math.random() * 5000) + 700,
  },
  {
    name: "Item 3",
    total: Math.floor(Math.random() * 5000) + 1000,
    total2: Math.floor(Math.random() * 5000) + 400,
  },
  {
    name: "Item 4",
    total: Math.floor(Math.random() * 5000) + 1000,
    total2: Math.floor(Math.random() * 5000) + 700,
  },
  {
    name: "Item 5",
    total: Math.floor(Math.random() * 5000) + 1000,
    total2: Math.floor(Math.random() * 5000) + 800,
  },
  {
    name: "Item 6",
    total: Math.floor(Math.random() * 5000) + 1000,
    total2: Math.floor(Math.random() * 5000) + 900,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#88888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#3eb4f4" radius={[4, 4, 0, 0]} />
        <Bar dataKey="total2" fill="#a0dbfb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
