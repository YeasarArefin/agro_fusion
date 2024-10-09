import FarmingAdviceReport from '@/components/report/FarmingAdviceReport';
import FieldOverviewReport from '@/components/report/FieldOverviewReport';
import PredictionsReport from '@/components/report/PredictionsReport';
import { getData } from '@/datacenter/esp32';
import { latitude, longitude } from '@/datacenter/LocationTrack';
import getQuery from '@/lib/functions/FetchQuery';
import { apiData } from '@/types/types';
import dynamic from 'next/dynamic';
const Languages = dynamic(() => import('@/components/report/Languages'), { ssr: false });


export default async function page({ searchParams }: { searchParams: { language: string; }; }) {


    const language = searchParams.language;

    const { data: humidityData } = await getQuery('https://agro-fusion.vercel.app/api/humidity/');
    const { data: disease } = await getQuery('https://agro-fusion.vercel.app/api/disease/');
    const uvindex = await getQuery(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max&timezone=auto`);
    const x = await getQuery("https://api.openepi.io/soil/type?lon=87&lat=23.8221");
    const weatherPredictionData = await getQuery(`https://api.open-meteo.com/v1/forecast?latitude=23.8221&longitude=90.4274&daily=precipitation_sum,rain_sum,precipitation_probability_max&timezone=auto&current=precipitation,rain`);
    const soilType = x?.properties?.most_probable_soil_type;
    const sensorData = await getData();
    const pH = sensorData.pH;
    const soilMoisture = (sensorData?.SoilMoisture1 + sensorData?.SoilMoisture2) / 2;
    const water_level = (sensorData?.WaterLevel1 + sensorData?.WaterLevel2) / 2;
    const organic_matter = sensorData?.Turbidity;
    const waterPurity = 100 - (sensorData?.TDS / 100);
    const soilDryness = 100 - ((sensorData?.SoilMoisture1 + sensorData?.SoilMoisture2) / 2);


    let needWater: string = '';
    if ((100 - sensorData?.water_level) > 60) {
        needWater = "Need to water the field";
    }

    let rain_decision;

    if (weatherPredictionData?.current?.rain > 0.1 && weatherPredictionData?.current?.rain < 2.5) {
        rain_decision = "Slight";
    } else if (weatherPredictionData?.current?.rain > 2.6 && weatherPredictionData?.current?.rain < 7.5) {
        rain_decision = "Moderate";
    } else if (weatherPredictionData?.current?.rain > 7.6) {
        rain_decision = "Heavy";
    } else {
        rain_decision = "No Rain";
    }

    let currentHealthComment;
    if ((soilMoisture > 0 && soilMoisture <= 30) || (water_level > 0 && water_level <= 30) || (organic_matter > 0 && organic_matter <= 30)) {
        currentHealthComment = "Too Bad";
    } else if ((soilMoisture > 30 && soilMoisture <= 45) || (water_level > 30 && water_level <= 45) || (organic_matter > 30 && organic_matter <= 45)) {
        currentHealthComment = "Needs Improvement";
    } else {
        currentHealthComment = "Good";
    }


    const promptData: apiData = {
        pH: pH,
        humidity: humidityData[humidityData.length - 1]?.humidity,
        water_level: water_level,
        disease,
        soil_health: currentHealthComment,
        soilType: soilType,
        uvIndex: uvindex.daily.uv_index_max[0],
        rain_type: rain_decision,
        waterPurity: waterPurity,
        soilDryness: soilDryness,
        groundwaterdecision: needWater

    };



    return (
        <div className='lg:px-16 pb-16' >

            <Languages />


            <div className='border-slate-200 border-b pb-4'>
                <h3 className='text-lg font-semibold py-2 text-primary'>Field Overview Report</h3>
                <FieldOverviewReport data={{ humidity: promptData.humidity, ph: promptData.pH, soil_health: promptData.soil_health, water_level: promptData.water_level, language }} />
            </div>

            <div className='border-slate-200 border-b pb-4'>
                <h3 className='text-lg font-semibold py-2 text-primary'>Farming Advice Report</h3>
                <FarmingAdviceReport data={{ disease, soilType, uvIndex: promptData?.uvIndex, language }} />
            </div>

            <div>
                <h3 className='text-lg font-semibold py-2 text-primary'>Predictions Report</h3>
                <PredictionsReport data={{ groundwaterdecision: promptData?.groundwaterdecision, rain_type: promptData?.rain_type, soilDryness: promptData?.soilDryness, waterPurity: promptData?.waterPurity, language }} />
            </div>

        </div>
    );
}