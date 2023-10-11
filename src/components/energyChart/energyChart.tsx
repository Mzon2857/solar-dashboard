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
    fetch("http://localhost:8800/api/solar/6526ce98b3849ff59c57c311")
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
          <Area type="monotone" dataKey="SOLAR_USAGE" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="CITY_USAGE" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;
