import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js";
import "./CoinPage.css";

const CoinChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;

  console.log("inside coinchart", data);
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              //label: `${detail.name} price`,
              data: day,
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(101, 184, 145, 1",
              borderWidth: 2,
              pointRadius: 0,
              fill: false,
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
        myChart.destroy();
      };
    }
  });

  return <canvas ref={chartRef}></canvas>;
};

export default CoinChart;
