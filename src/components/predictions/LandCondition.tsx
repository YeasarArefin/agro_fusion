"use client";
import ModuleTitle from '@/components/ui/ModuleTitle';
import { getData } from "@/datacenter/esp32";
import { SoilData } from '@/types/types';
import axios from 'axios';
import { useEffect, useState } from 'react';



const LandCondition = () => {
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

  //low turbidity means high water purity
  const waterPurity = 100-(soilData?.TDS/100);

  //if moisture is 10%-- then dryness would be 90%.
  // moisture 0-10%-- very dry
  // moisture 90-100% --- very wet
  const soilDryness = 100 - ((soilData?.SoilMoisture1 + soilData?.SoilMoisture2) / 2);
  const inorganic_matter = 100 - soilData?.Turbidity;
  const organic_matter = soilData?.Turbidity;

  //push alert 
  setTimeout(() => {
  if (soilDryness > 90){
    axios.post('/api/alert', {
      alert: `Soil Dryness is ${soilDryness}%`,
      description: `The soil is extremely dry, with only ${100-soilDryness}% moisture content remaining.`,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }  }, 21600000);




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


  const data = [
    // { id: 1, title: 'Soil Moisture Content', value: '20%' },
    { id: 2, title: 'Inorganic Matter', value: `${inorganic_matter}%` },
    { id: 4, title: 'Organic Matter', value: `${organic_matter}%` }, // If TDS is high, organic matter is low
    { id: 5, title: 'Soil Dryness', value: `${soilDryness}%` },
    { id: 6, title: 'Water Purity', value: `${waterPurity}%` },
  ];
  return (
    <div className="pl-4">
      <ModuleTitle title="Land Conditions" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        {data?.map((item) => {
          return (
            <>
              <div
                key={item?.id}
                className="bg-green-50 flex flex-col h-36 items-center justify-center rounded-lg p-4"
              >
                <p className="text-slate-600 text-sm ">{item?.title}</p>
                <h1 className="text-5xl font-bold text-center">{item?.value}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LandCondition;
