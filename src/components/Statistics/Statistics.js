import React from 'react';
// import { Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (
        <div className='container'>
                <h3 className='my-4'>Quiz Statistics</h3>
                <BarChart className='mx-auto' width={800} height={500} data={data}>
                    <Bar dataKey="total" barSize={50} fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis />
                </BarChart>
        </div>
    );
};

export default Statistics;