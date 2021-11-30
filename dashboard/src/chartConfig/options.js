export const chartOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },

  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxis: [
      {
        type: "time",
        distrabution: "linear",
      },
    ],
  },
};
