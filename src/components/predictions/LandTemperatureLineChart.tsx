'use client';

import {longitude, latitude} from '../../datacenter/LocationTrack';

import React, { useEffect, useState } from 'react'
import axios from 'axios';import {
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);



  interface LandData {
    list: { dt_txt: string; main: { temp: number } }[];
  }


export default function LandTemperatureLineChart() {

  const [landData, setLandData] = useState<LandData | null>(null);
  const lamnDataTime: string[] = []
  const lamnDataTemp: number[] = [];

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=d030577851d8a269dcfd3bd1bb8088c1
`)
      .then(response => {
        setLandData(response.data);
      })
      .catch(error => {
        console.log(error);
      })

    })

          // Extracting time from the API data and formating it for Chart.js
          if(landData) {
            landData?.list.forEach((item) => {
              const dateString = item.dt_txt;
              function formatTime(dateString: string) {
                const date = new Date(dateString);
                let hours = date.getHours();
                const minutes = date.getMinutes().toString().padStart(2, '0');
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12; // Convert 0 to 12 for midnight
                return `${hours}:${minutes} ${ampm}`;
              }
              
              const formattedTime = formatTime(dateString);          
              lamnDataTime.push(formattedTime);
            });
          } 
    
          // Extracting temperature data from API data and formatting it for Chart.js
          if(landData) {
            landData?.list.forEach((item) => {
              const allTemp = item?.main?.temp - 273;
              lamnDataTemp.push(allTemp);
            });
          } 



  // const labels = Utils.months({count: 7});
  const data = {
    labels: lamnDataTime,
    datasets: [
      {
        label: 'Land Temperature (°C)',
        data: lamnDataTemp,
        fill: false,
        borderColor: '#008A09',
        tension: 0.2,
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
              max: 50,
              ticks: {
                stepSize: 10,
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
