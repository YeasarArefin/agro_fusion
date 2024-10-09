/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getData } from "@/datacenter/esp32";
import { useEffect, useState } from "react";
import ModuleTitle from "../ui/ModuleTitle";


const Humidity = () => {

    const [data, setData] = useState<{ Humidity: number; }>({ Humidity: 0 });

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getData();
                setData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [getData]);

    return (
        <div className="flex justify-between pl-6">
            <div>
                <div className="mb-3">
                    <ModuleTitle title="Humidity" />
                </div>
                <h1 className="text-lg">Today&apos;s Humidity : <span className="text-primary font-bold">{data.Humidity}%</span></h1>
            </div>

        </div>
    );
};

export default Humidity;