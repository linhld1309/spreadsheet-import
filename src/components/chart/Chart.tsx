import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const sourceData = [
    {
      "label": "Views",
      "value": 450
    },
    {
      "label": "Subscription",
      "value": 100
    },
    {
      "label": "Likes",
      "value": 200
    }
  ]

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "グラフタイトル",
      },
    },
  };

  const data = {
    labels: sourceData.map((data) => data.label),
    datasets: [{
      label: "count",
      data: sourceData.map((data) => data.value),
      backgroundColor:[
        "rgb(55,48,163)",
        "rgb(109 40 217)",
        "rgb(30 27 75)",
      ],
      borderRadius:5,
    }]
  };

  return (
    <>
      <Bar className='m-2 lg:p-3' options={options} data={data} />
    </>
  )
}
