"use client"
import ModuleTitle from '@/components/ui/ModuleTitle';
import { FaTemperatureFull } from "react-icons/fa6";
import LandTemperatureLineChart from './LandTemperatureLineChart';
import { getData } from "@/datacenter/esp32";
import { SoilData } from '@/types/types';
import { useEffect, useState } from 'react';


const LandTemp = () => {
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
  
  

  return (
  <div>
      <div className="flex flex-row justify-between">
        <ModuleTitle title="Land Temperature" />
      </div>
      {/* temp  */}
      <div className="flex flex-col py-4">
        <h2 className='font-semibold text-sm py-2'>Current Land Temperature</h2>
        <div className="flex flex-row items-center space-x-2">
          {/* icon  */}
          <FaTemperatureFull className='text-2xl'/>
          <h2 className="font-bold text-2xl">{soilData?.Temperature}°C</h2>
        </div>
      </div>

      {/* charts  */}
      <LandTemperatureLineChart />
    </div>
  );
};

export default LandTemp;
