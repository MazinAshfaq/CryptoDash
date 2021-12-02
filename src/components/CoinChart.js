import React, { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js";
import "../pages/CoinPage.css";

const CoinChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [time, setTime] = useState("24h");

  //Function to change time scale
  const Format = () => {
    switch (time) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    //Create chart
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              //label: `${detail.name} Price`,
              data: Format(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(101, 184, 145, .4)",
              borderWidth: 2,
              pointRadius: 0,
              fill: true,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1,
          },

          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [
              {
                gridLines: "rgb(174, 305, 194)",
                weight: 10,
              },
            ],
            xAxes: [
              {
                gridLines: "rgb(174, 305, 194)",
                type: "time",
                distribution: "linear",
                weight: 10,
              },
            ],
          },
        },
      });
      return () => {
        //Make sure to destroy chart before rerendering to avoid canvas conflict
        myChart.destroy();
      };
    }
  });

  return (
    <>
      <div className="chart-button">
        <button onClick={() => setTime("24h")} className="timeButton">
          24h
        </button>
        <button onClick={() => setTime("7d")} className="timeButton">
          7d
        </button>
        <button onClick={() => setTime("1y")} className="timeButton">
          1y
        </button>
      </div>
      <canvas ref={chartRef}></canvas>
    </>
  );
};

export default CoinChart;
