import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (
        <div className='container recharts'>
            <h3 className='my-4'>Quiz Statistics</h3>
            <BarChart className='mx-auto' width={600} height={400} data={data}>
                <Bar dataKey="total" barSize={50} fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis />
            </BarChart>
        </div>
    );
};

export default Statistics;