import React, { PureComponent, useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./energyChart.scss";

const EnergyChart = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8800/api/solar/651d739a33de0cb9d0e3be3f")
      .then((response) => response.json())
      .then((responseData)=>{
        setData(responseData.data);
      })
      .catch((error)=>{
        console.log("Error fetching data. ", error)
      })
  }, []);

  console.log(data)

  return (
    <div className="energyChart">
      <h2>Energy Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="DATE_TIME" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="usage.hvac" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="usage.lighting" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="usage.floor1" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;
