import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const StatisticsChart = () => {
    const [productData, setProductData] = useState([]);

    // Fetch data from data.json
    useEffect(() => {
        fetch('./Data.json')
            .then(response => response.json())
            .then(data => setProductData(data.slice(0,15)));
    }, []);

    // Extract data for the chart
    const labels = productData.map(item => item.product_title);
    const prices = productData.map(item => item.price);
    const ratings = productData.map(item => item.rating * 20);
    const totals = productData.map(item => item.price * 1.2);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Price',
                data: prices,
                backgroundColor: 'rgba(128, 0, 128, 0.7)',
                borderColor: 'rgba(128, 0, 128, 1)',
                borderWidth: 1,
                type: 'bar',
            },
            {
                label: 'Total',
                data: totals,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                type: 'line',
                fill: true,
            },
            {
                label: 'Rating',
                data: ratings,
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1,
                type: 'bar',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default StatisticsChart;
