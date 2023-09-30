import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./batteryChart.scss";

const data = [
  {
    ID: "1",
    percent: 40,
  },
  {
    ID: "2",
    percent: 15,
  },
  {
    ID: "3",
    percent: 20,
  },
  {
    ID: "4",
    percent: 45,
  },
  {
    ID: "5",
    percent: 70,
  },
  {
    ID: "6",
    percent: 85,
  },
  {
    ID: "7",
    percent: 69,
  },
];

const BatteryChart = () => {
  return (
    <div className="batteryChart">
      <h2>Battery Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ID" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="percent"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BatteryChart;
