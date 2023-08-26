import { Header } from "../../components";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(0, 65, 96, 0.949)",
      backgroundColor: "rgba(0, 65, 96, 0.949)",
      lineTension: 0.4,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(95, 230, 230, 0.933)",
      backgroundColor: "rgba(95, 230, 230, 0.933)",
      lineTension: 0.4,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(52, 52, 52, 0.949)",
      backgroundColor: "rgba(52, 52, 52, 0.949)",
      lineTension: 0.4,
    },
  ],
};
export const Area = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl  ">
      <Header category="Chart " title="Inflation" />
      <div className="w-full mt-10">
        <Line options={options} data={data} />;
      </div>
    </div>
  );
};
