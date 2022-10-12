import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const topics = useLoaderData();
    const { data } = topics;
    return (
        <Container className='container recharts mx-auto'>
            <h3 className='my-4'>Quiz Statistics</h3>
            <Row xs={1} md={3} className="g-12 mx-auto">
                <BarChart className='mx-auto barchart' width={350} height={400} data={data}>
                    <Bar dataKey="total" barSize={50} fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis />
                </BarChart>
            </Row>
        </Container>
    );
};

export default Statistics;