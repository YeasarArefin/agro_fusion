'use client';
import {
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);
export default function GroundWaterLevelLineChart() {
  // const labels = Utils.months({count: 7});
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: 'State 1',
        // data: [],
        data: [10, 5, 25, 28, 32, 36, 20, 26, 36],
        fill: true,
        borderColor: '#008A09',
        tension: 0.3,
      },
      {
        label: 'State 2',
        // data: [],
        data: [5, 15, 33, 24, 40, 24, 23, 43, 4],
        fill: true,
        borderColor: '#FAD215',
        tension: 0.3,
      },
      {
        label: 'State 3',
        // data: [],
        data: [12, 25, 5, 18, 43, 2, 34, 26, 13],
        fill: true,
        borderColor: '#CE2029',
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <Line
        data={data}
        options={{
          responsive: true,
          scales: {
            x: {
              max: 60,
              ticks: {
                stepSize: 20,
              },
            },
            y: {
              max: 50,
              ticks: {
                stepSize: 10,
              },
            },
          },
        }}
      />
    </div>
  );
}
