import React from "react";
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
import moment from "moment";

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

const CryptoChart = ({ historicData, currency }) => {
  //   console.log(historicData);

  if (!historicData) {
    return <div>Loading...</div>;
  }

  const coinChartData = historicData.map((value) => {
    return { x: value[0], y: value[1].toFixed(2) };
  });

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => {
      return moment(value.x).format("MMMDD");
    }),
    datasets: [
      {
        fill: true,
        label:`Price in ${currency}`,
        data: coinChartData.map((value)=> {
            return value.y
        }),
        borderColor: "white",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default CryptoChart;
