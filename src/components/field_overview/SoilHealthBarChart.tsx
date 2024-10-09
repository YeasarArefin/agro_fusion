'use client';
import { CategoryScale, ChartData } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { getData } from "@/datacenter/esp32";
import { SoilData } from '@/types/types';
import { useEffect, useState } from 'react';

Chart.register(CategoryScale);
export default function SoilHealthPieChart() {
  const [soilData, setSoilData] = useState<SoilData>({
    Altitude: 0,
    Humidity: 0,
    Latitude: 0,
    Longitude: 0,
    SoilMoisture1: 0,
    SoilMoisture2: 0,
    TDS: 0,
    Temperature: 0,
    Turbidity: 0,
    WaterLevel1: 0,
    WaterLevel2: 0,
    pH:0

  });

  const soilMoisture =(soilData?.SoilMoisture1 + soilData?.SoilMoisture2) / 2;
  const water_level =(soilData?.WaterLevel1 + soilData?.WaterLevel2) / 2;
  const organic_matter = soilData?.Turbidity;



  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setSoilData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);


  // 'Soil Moisture (Soil moisture sensor)'
// 'Organic matter (same as the one in prediction)'
// 'water capacity (Water level sensor - 24)'
    const data: ChartData<'bar', number[], string> = {
        labels: ['Soil Moisture','Organic Matter','Water capacity'],
        datasets: [
          {
            label: "Soil Health(%)",
            data: [soilMoisture,organic_matter,water_level],
            backgroundColor: [
              '#008A09',
              '#17B169',
              '#00563B',
            ],
          }
        ],
      };
    
    
      const options = {
        responsive: true,
        scales: {
          x: {
            max: 40,
            ticks: {
              stepSize: 10,
            },
          },
          y: {
            max: 60,
            ticks: {
              stepSize: 5,
            },
          },
        },
      };

    return (
        <div className='flex justify-center'>
            <div className=''>
                <Bar data={data} options={options}/>
            </div>
        </div>
    );
}
