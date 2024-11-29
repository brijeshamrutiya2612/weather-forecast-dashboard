import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TemperatureChart = ({ city }) => {
  const chartRef = useRef(null);
    console.log("city_19191991",city)
  useEffect(() => {
    if (!city) return;

    const labels = city.forecast.map((day) => day.day);
    const data = city.forecast.map((day) => day.high);

    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: `Temperature Trend for ${city.name}`,
            data,
            borderColor: "blue",
            backgroundColor: "lightblue",
            fill: true,
          },
        ],
      },
      options: { responsive: true },
    });

    return () => {
      Chart.getChart(chartRef.current)?.destroy();
    };
  }, [city]);

  return (
    <div className="graph-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default TemperatureChart;
