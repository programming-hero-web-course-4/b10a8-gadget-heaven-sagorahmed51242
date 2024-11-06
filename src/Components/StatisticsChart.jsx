import { useEffect, useState } from 'react';
import { Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

const StatisticsChart = () => {
    const [productData, setProductData] = useState([]);

    // Fetch data from data.json
    useEffect(() => {
        fetch('/Data.json')  // Adjust the path to where your data file is located
            .then(response => response.json())
            .then(data => setProductData(data.slice(0, 15)));  // Limit to 15 items for demo
    }, []);

    // Data structure expected by Recharts
    const chartData = productData.map(item => ({
        name: item.product_title,
        Price: item.price,
        Rating: item.rating * 20,  // Assuming rating is out of 5, converting to percentage
        Total: item.price * 1.2
    }));

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Price" fill="rgba(128, 0, 128, 0.7)" />
                    <Line type="monotone" dataKey="Total" stroke="rgba(153, 102, 255, 1)" />
                    <Bar dataKey="Rating" fill="rgba(255, 0, 0, 0.5)" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatisticsChart;
