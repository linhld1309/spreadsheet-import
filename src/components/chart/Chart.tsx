import React from 'react';
import { Bar } from "react-chartjs-2";

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

  return (
    <Bar className='m-2 lg:p-3 '
      data={{
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
      }}
    />
  )
}
