'use client';
import { CategoryScale, LineElement, LinearScale, PointElement } from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);
export default function TemperatureLineChart() {

    // const labels = Utils.months({count: 7});
    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            label: 'My First Dataset',
            // data: [],
            data: [10, 5, 25, 28, 32, 36, 20, 26, 33],
            fill: false,
            borderColor: '#008A09',
            tension: 0.1
        }]
    };

    return (
        <div>
            <Line
                data={data}
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            max: 60,
                            ticks: {
                                stepSize: 20
                            }
                        },
                        y: {
                            max: 50,
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
