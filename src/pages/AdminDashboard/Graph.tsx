import { Bar } from "@reactchartjs/react-chart.js";
import React, { useEffect, useState } from "react";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          offsetGridLines: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          offsetGridLines: false,
        },
      },
    ],
  },
};
const seed = () =>
  parseInt(((Math.random() * 100) % (Math.random() * 100)).toFixed(0));
const random = (number: number) => {
  return (Math.random() > (number % 10) / 10 ? 5 : -2) + number;
};
function Graph() {
  const [dynamicValues, setDynamicValues] = useState<number[]>([
    seed(),
    seed(),
    seed(),
    seed(),
    seed(),
    seed(),
    seed(),
  ]);
  useEffect(() => {
    setInterval(() => {
      setDynamicValues((pre) => pre.map(random));
    }, 1000);
  }, []);
  const data = {
    labels: ["Jaro", "LTI", "TCS Ninja", "ICICI", "Cognizent", "Chegg"],
    datasets: [
      {
        label: "# of Students Placed",
        data: dynamicValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h1>Placements Record</h1>
      <Bar data={data} options={options} type="Bar" />
    </div>
  );
}

export default Graph;
