"use client";
import { getData } from "@/datacenter/esp32";
import { SoilData } from '@/types/types';
import axios from "axios";
import { useEffect, useState } from 'react';
import ModuleTitle from "../ui/ModuleTitle";
import SoilHealthPieChart from "./SoilHealthBarChart";

export default function SoilHealth() {
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
    pH: 0

  });

  const soilMoisture = (soilData?.SoilMoisture1 + soilData?.SoilMoisture2) / 2;
  const water_level = (soilData?.WaterLevel1 + soilData?.WaterLevel2) / 2;
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

  let currentHealthComment;
  if ((soilMoisture > 0 && soilMoisture <= 30) || (water_level > 0 && water_level <= 30) || (organic_matter > 0 && organic_matter <= 30)) {
    currentHealthComment = "Too Bad";
  } else if ((soilMoisture > 30 && soilMoisture <= 45) || (water_level > 30 && water_level <= 45) || (organic_matter > 30 && organic_matter <= 45)) {
    currentHealthComment = "Needs Improvement";
  } else {
    currentHealthComment = "Good";
  }


  //push alert 
  setTimeout(() => {
    if (currentHealthComment == "Too Bad") {
      axios.post('/api/alert', {
        alert: `Soil Health is ${currentHealthComment}`,
        description: `Ask to help center for soil health improvement.`,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, 21600000);




  return (
    <div className="border-0 md:border-r border-slate-300 py-3 pr-3">
      <ModuleTitle title="Soil Health Check" />
      <div className='py-6'>
        <div className={`flex flex-row items-center justify-between mt-2 p-4 ${currentHealthComment == "Too Bad" ? "bg-red-100" : currentHealthComment == "Good" ? "bg--green-100" : "bg-yellow-100"} rounded-md`}>
          <h2 className={` text-sm ${currentHealthComment == "Too Bad" ? "text-red-600" : currentHealthComment == "Good" ? "text-green-600" : "text-yellow-600"}`}>Soil Health:  <span className={`font-bold   ${currentHealthComment == "Too Bad" ? "text-red-600" : currentHealthComment == "Good" ? "text-green-600" : "text-yellow-600"}`}>

            {currentHealthComment}

          </span></h2>

          <h2 className={` text-sm  ${currentHealthComment == "Too Bad" ? "text-red-600" : currentHealthComment == "Good" ? "text-green-600" : "text-yellow-600"}`}>Current:  <span className={`font-bold   ${currentHealthComment == "Too Bad" ? "text-red-600" : currentHealthComment == "Good" ? "text-green-600" : "text-yellow-600"}`}>

            {currentHealthComment == "Too Bad" ? "Bellow 30%" : currentHealthComment == "Good" ? "Above 45%" : "Between 30% and 45%"}

          </span></h2>
        </div>
      </div>
      <SoilHealthPieChart />
    </div>
  );
}
