import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {name, logo, total, id} = topic;
    return (
            <Col>
              <Card className='w-75 mb-4 px-4 py-4 mx-auto'>
                <Card.Img className='rounded bg-dark mb-4' variant="top" src={logo} />
                <h4>Topic: {name}</h4>
                <p>Total Quiz: {total}</p>
                <Link className='w-50 mx-auto' to={`/home/${id}`}><Button className='bg-info b-0'>Quiz</Button></Link>
              </Card>
            </Col>
    );
};

export default Topic;