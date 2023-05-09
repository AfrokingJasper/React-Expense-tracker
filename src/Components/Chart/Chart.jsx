import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValue = props.dataPoint.map((datas) => datas.value);
  const totalMax = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoint.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          value={data.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
