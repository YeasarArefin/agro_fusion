'use client';
import {
  CategoryScale,
  ChartData,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);


interface WeatherConditionChartProps {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weatherPredictionData: any;

}


const WeatherConditionChart: React.FC<WeatherConditionChartProps> = ({ weatherPredictionData }) => {
  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: weatherPredictionData?.daily?.time,
    datasets: [
      {
        label: 'Precipitation Probability Max(%)',
        data: weatherPredictionData?.daily?.precipitation_probability_max,
        fill: false,
        borderColor: '#008A09',
        pointBorderWidth: 5,
        tension: 0.1,
      },
      {
        type: 'bar' as const,
        label: 'Rain Sum(mm)',
        data: weatherPredictionData?.daily?.rain_sum,
        // backgroundColor: "#00308F",
        backgroundColor: "#00308F",
        borderWidth: 1
      },
      {
        type: 'bar' as const,
        label: 'Precipitation Sum(mm)',
        data: weatherPredictionData?.daily?.precipitation_sum,
        // backgroundColor: "#ffde21",
        backgroundColor: "#008A09",
        borderWidth: 1
      },
    ],
  };


  const options = {
    responsive: true,
    scales: {
      x: {
        max: 60,
        ticks: {
          stepSize: 20,
        },
      },
      y: {
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };


  return (
    <div>
      <Line
        data={data as ChartData<'line', number[], string>}//+
        options={options}
      />
    </div>
  );
};

export default WeatherConditionChart;