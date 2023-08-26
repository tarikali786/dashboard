import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { Header } from "../../components";
const { CanvasJS, CanvasJSChart } = CanvasJSReact;

export const Pyramid = () => {
  const [options, setOptions] = useState({
    animationEnabled: true,
    title: {
      text: "Sales via Advertisement",
    },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center",
      reversed: true,
    },
    data: [
      {
        type: "pyramid",
        showInLegend: true,
        legendText: "{label}",
        indexLabel: "{label} - {y}",
        toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
        dataPoints: [
          { label: "Impressions", y: 2850 },
          { label: "Clicked", y: 2150 },
          { label: "Free Downloads", y: 1900 },
          { label: "Purchase", y: 650 },
          { label: "Renewal", y: 250 },
        ],
      },
    ],
  });

  useEffect(() => {
    // Calculate percentage
    const dataPoint = options.data[0].dataPoints;
    const total = dataPoint[0].y;
    for (let i = 0; i < dataPoint.length; i++) {
      if (i === 0) {
        options.data[0].dataPoints[i].percentage = 100;
      } else {
        options.data[0].dataPoints[i].percentage = (
          (dataPoint[i].y / total) *
          100
        ).toFixed(2);
      }
    }
    // Update the state with calculated percentages
    setOptions({ ...options });
  }, []);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl  ">
      <Header category="Chart " title="Inflation" />
      <div className="w-full mt-10 dark:bg-secondary-dark-bg">
        <CanvasJSChart options={options} color={"dark:bg-secondary-dark-bg"} />
      </div>
    </div>
  );
};
