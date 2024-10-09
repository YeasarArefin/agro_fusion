"use client";
import { getData } from "@/datacenter/esp32";
import { SoilData } from "@/types/types";
import { useEffect, useState } from "react";
import ModuleTitle from "../ui/ModuleTitle";

export default function PhLevel() {
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

  const phColors = [
    "#f8382e", // pH 0 (Strong Acid, Red)
    "#f8357a", // pH 1
    "#fe7e37", // pH 2
    "#fe7e37", // pH 3
    "#ffa93b", // pH 4
    "#f6ec3d", // pH 5
    "#a0cd4a", // pH 6
    "#37b850", // pH 7 (Neutral, Green)
    "#00924b", // pH 8
    "#009494", // pH 9
    "#4975b7", // pH 10
    "#424a9c", // pH 11
    "#263081", // pH 12
    "#9a258a", // pH 13
    "#7f2877"  // pH 14 (Strong Base, Blue)
  ];

  const pHColor = phColors[soilData?.pH];
  console.log(pHColor);

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

  return (
    <div className="py-5">
      <ModuleTitle title="pH Level" />
      <h1 className="text-slate-500">Lorem ipsum dolor sit amet.</h1>
      <div className="flex justify-center h-full">
        <div className={`flex flex-col justify-center items-center w-[200px] h-[200px] text-white rounded-full mt-8`} style={{ backgroundColor: pHColor }}>
          <h1 className="text-8xl font-semibold">{soilData?.pH}</h1>
          <h1>{soilData?.pH >= 0 && soilData?.pH <= 6 ? "Acidic" : soilData?.pH >= 8 && soilData?.pH <= 14 ? "Alkaline" : "Neutral"}</h1>
        </div>
      </div>
    </div>
  );
}
