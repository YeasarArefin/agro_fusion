'use client';

import {longitude, latitude} from '../../datacenter/LocationTrack';
import axios from 'axios';
import {
  CategoryScale,
  ChartData,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);


interface FloodData {
  daily: { time: string[]; river_discharge: number[], temperature_2m_max: number[], relative_humidity_2m_max: number[] };
}

const DroughtChart = () => {

  const [DroughtData, setDroughtData] = useState<FloodData | null>(null);


  useEffect(() => {
    axios.get(`https://climate-api.open-meteo.com/v1/climate?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,relative_humidity_2m_max
`)
      .then(response => {
        setDroughtData(response.data);
      })
      .catch(error => {
        console.log(error);
      })

    },[])

    // console.log(floodData)
  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: DroughtData?.daily?.time,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: DroughtData?.daily?.temperature_2m_max || [],
        fill: false,
        borderColor: '#008A09',
        pointBorderWidth: 5,
        tension: 0.1,
      },
      {
        label: 'Relative Humidity (%)',
        data: DroughtData?.daily?.relative_humidity_2m_max || [],
        fill: false,
        borderColor: '#00308F',
        pointBorderWidth: 5,
        tension: 0.1,
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
        max: 200,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };


  return (
    <div className='mt-5'>
      <Line
        data={data as ChartData<'line', number[], string>}//+
        options={options}
      />
    </div>
  );
};

export default DroughtChart;