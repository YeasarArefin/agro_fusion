- https://apidocs.geoapify.com/
- https://open-meteo.com/en/docs#hourly=precipitation_probability,precipitation,rainpi
- https://developer-test.openepi.io/data-catalog/soil/
  https://agromonitoring.com/

<!-- 'use client';
import { Humidity } from '@/types/types';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale);

export default function HumidityBubbleChart({ data }: { data: Humidity[]; }) {
    // Step 1: Group humidity data by date (YYYY/MM/DD)
    const groupedData = data.reduce((acc: { [key: string]: number[]; }, item: Humidity) => {
        const date = new Date(item.createdAt).toISOString().split('T')[0]; // Extract date (YYYY-MM-DD)
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item.humidity); // Add humidity to the corresponding date
        return acc;
    }, {});

    // Step 2: Flatten the grouped data into labels and datasets
    const labels: string[] = [];
    const humidityValues: number[] = [];
    const backgroundColors: string[] = [];
    const borderColors: string[] = [];

    Object.keys(groupedData).forEach((date, index) => {
        groupedData[date].forEach((humidity) => {
            labels.push(date); // Push the date multiple times for each humidity value
            humidityValues.push(humidity);
            backgroundColors.push(`rgba(${index * 50}, 99, 132, 0.2)`); // Dynamic background color for each bar
            borderColors.push(`rgba(${index * 50}, 99, 132, 1)`);       // Dynamic border color for each bar
        });
    });

    const chartData = {
        labels,  // x-axis labels (dates, potentially repeated)
        datasets: [{
            label: 'Humidity (%)',
            data: humidityValues, // Flattened humidity values
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    };

    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date (YYYY/MM/DD)',
                            },
                            type: 'category', // Use 'category' to display formatted date strings
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Humidity (%)',
                            },
                            beginAtZero: true,
                            min: 0,
                            max: 100, // Ensure the range covers 0-100 for humidity
                        },
                    },
                }}
            />
        </div>
    );
} -->
