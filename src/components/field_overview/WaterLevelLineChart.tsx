'use client';
import { WaterLevel } from '@/types/types';
import { CategoryScale, LineElement, LinearScale, PointElement } from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);
export default function WaterLevelLineChart({ data }: { data: WaterLevel[]; }) {

    const formatTimeAMPM = (dateString: string) => {
        const date = new Date(dateString);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'
        const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutesStr} ${ampm}`;
    };


    const formatChartData = (apiData: WaterLevel[]) => {
        const labels = apiData.map(item => formatTimeAMPM(item.createdAt));
        const data = apiData.map(item => item.water_level);

        return {
            labels: labels, // Time in AM/PM as labels
            datasets: [{
                label: 'Water Level Data',
                data: data, // Water levels as data points
                fill: false,
                borderColor: '#008A09',
                tension: 0.1
            }]
        };
    };

    const chartData = formatChartData(data);

    return (
        <div>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time (AM/PM)',
                            },
                            max: 60,
                            ticks: {
                                stepSize: 20
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Water Level (%)',
                            },
                            max: 100,
                            ticks: {
                                stepSize: 10
                            }
                        }
                    }
                }}
            />
        </div>
    );
}
