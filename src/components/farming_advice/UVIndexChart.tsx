'use client';
import { latitude, longitude } from '@/datacenter/LocationTrack';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UVIndexChart: React.FC<any> = ({ setuvindexarr }) => {


  interface UVData {
    daily: {
      uv_index_max: number[];
      time: string[];
    };
  }

  const [UVdata, setUVdata] = useState<UVData | null>(null);
  const [uvindexcolor, setUvindexcolor] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max&timezone=auto`)
      .then(response => {
        const data = response.data;
        setUVdata(data);
        console.log(data);

        const colors: string[] = [];
        const uvArr: object[] = [];
        console.log("🚀 ~ useEffect ~ uvArr:", uvArr);

        if (data && data.daily && data.daily.uv_index_max) {
          for (let i = 0; i < data.daily.uv_index_max.length; i++) {
            const single_uv_index = data.daily.uv_index_max[i];
            const check_uv_index = {
              uv: single_uv_index,
              level: single_uv_index >= 1 && single_uv_index <= 3 ? "Low" : single_uv_index > 3 && single_uv_index < 7.5 ? "Moderate" : "High",
            };
            check_uv_index.level === 'High' ? colors.push('#ec0000') : check_uv_index.level === 'Moderate' ? colors.push('#ecca00') : colors.push('#008A09');

            uvArr?.push(check_uv_index);
          }
        }
        setuvindexarr(uvArr);
        setUvindexcolor(colors);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setuvindexarr]);


  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: UVdata?.daily?.time || [],
    datasets: [
      {
        type: "bar",
        label: "UV Index",
        data: UVdata?.daily?.uv_index_max || [],
        backgroundColor: uvindexcolor
      }
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
        max: 20,
        ticks: {
          stepSize: 5,
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

export default UVIndexChart;