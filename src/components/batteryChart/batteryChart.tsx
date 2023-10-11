import React, { PureComponent, useState, useEffect } from "react";
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

const BatteryChart = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8800/api/solar/6526ce98b3849ff59c57c311")
      .then((response) => response.json())
      .then((responseData)=>{
        setData(responseData.data);
      })
      .catch((error)=>{
        console.log("Error fetching data. ", error)
      })
  }, []);

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
            dataKey="remainingBattery"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BatteryChart;
