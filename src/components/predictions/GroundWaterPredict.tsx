"use client";
import ModuleTitle from '@/components/ui/ModuleTitle';
import { getData } from "@/datacenter/esp32";
import { SoilData } from '@/types/types';
import { useEffect, useState } from 'react';


const GroundWaterPredict = () => {
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
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  //water level  
  const waterLevel = (soilData?.WaterLevel1 + soilData?.WaterLevel2) / 2;


  const data = [
    { id: 1, title: 'Amount of Water', value: `${waterLevel}` },
    { id: 2, title: 'Water Run Off', value: `${100-waterLevel}` },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center space-x-3">
      <div className="border-r border-slate-200 py-16 px-10">
        <ModuleTitle title="Ground-Water" />
      </div>

      {/* groundwater prediction */}
      <div className="flex flex-col lg:flex-row items-center space-x-10 px-12">
        {data?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex flex-col items-center space-y-1"
            >
              <div className="bg-primary flex flex-col items-center w-24 h-24 justify-center rounded-full p-4">
                <h1 className="text-xl text-white">{item?.value}%</h1>
              </div>

              <p className="text-slate-500 text-sm ">{item?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroundWaterPredict;
