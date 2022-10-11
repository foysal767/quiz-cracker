import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    return (
        <Container>
            <div style={{ backgroundImage: "" }}>
                <h2>This is header part</h2>
            </div>
            <Row xs={1} md={3} className="g-12 text-center mx-auto bg-info px-4 py-5 rounded">
            {
                (topics.data).map(topic => <Topic
                    key={topic.id}
                    topic={topic}></Topic>)
            }
            </Row>
        </Container>
    );
};

export default Home;