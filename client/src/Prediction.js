import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Import the necessary elements for the chart
import { LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// Register the imported elements with the chart.js library
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);

const Prediction = () => {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current;
        const chartConfig = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Predicted Blood Type',
                        borderColor: 'rgba(255, 25, 132, 1)',
                        data: [0, 2, 3, 4, 5, 6, 7, null, null, null, null, null], // Replace with your predicted data
                        fill: false,
                    },
                    {
                        label: 'Blood Type',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderDash: [5, 5], // Dotted line
                        data: [0, 2, 3, 4, 5, 6, 7, 10, 9, 13, 15, 20], // Replace with your predicted data
                        fill: false,
                    },
                ],
            },
            options: {
                animation: {
                    duration: 0, // Set animation duration to 0 to disable animations
                },
                scales: {
                    x: {
                        type: 'category', // Use 'category' scale for labels
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };

        // Create the chart instance using the configuration
        chartRef.current = new Chart(ctx, chartConfig);

        return () => {
            // Clean up the chart when the component unmounts
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <div className="fs-6">Forecasted Blood Count</div>
            <canvas ref={canvasRef} width="200" height="70"></canvas>
        </>
    );
};

export default Prediction;
