import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart__bar">
      <div className="chart__bar-inner">
        <div
          className="chart__bar-fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="Chart__bar-label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
