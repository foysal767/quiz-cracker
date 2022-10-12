import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    return (
        <Container className='home'>
            <div>
                <div className='my-4' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`, height: "90vh", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='text-white position-absolute top-50 px-auto'>
                        <h2 >World's Best Quiz Website</h2>
                        <p>TopQuizCoder is a web-based Audience Engagement Cloud Platform for test personal skills about coding. It's also help learing.</p>
                    </div>
                </div>
                <Row xs={1} md={3} className="g-12 text-center mx-auto bg-info px-4 py-5 rounded">
                    {
                        (topics.data).map(topic => <Topic
                            key={topic.id}
                            topic={topic}></Topic>)
                    }
                </Row>

            </div>
        </Container>
    );
};

export default Home;