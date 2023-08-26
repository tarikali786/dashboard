import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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

export const LineCharts = ({ id, width, height, currentColor, color }) => {
  const customData1 = [50, 300, 600, 800, 400, 900, 700];
  const customData2 = [30, 340, 500, 600, 470, 800, 300];
  const customData3 = [100, 200, 700, 860, 460, 500, 400];

  const datas = {
    labels,
    datasets: [
      {
        label: "2021",
        data: customData1,
        borderColor: currentColor,
        backgroundColor: color,
        // fill: true,
        lineTension: 0.4,
      },
      {
        label: "2022",
        data: customData2,
        borderColor: "green",
        // backgroundColor: "green",
        // fill: true,
        lineTension: 0.4,
      },
      {
        label: "2023",
        data: customData3,
        borderColor: "black",
        backgroundColor: "black",
        // fill: true,
        lineTension: 0.4,
      },
    ],
  };
  return (
    <Line
      datasetIdKey={id}
      options={options}
      data={datas}
      width={width}
      height={height}
    />
  );
};
