import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    return (
            <Col>
              {/* <Card className='w-75 mb-4 px-4 py-4 mx-auto'>
                <Card.Img className='rounded bg-dark mb-4' variant="top" src={logo} />
                <h4>Topic: {name}</h4>
                <p>Total Quiz: {total}</p>
                <Button variant="info" className='w-50 mx-auto'>Practice</Button>
              </Card> */}
            </Col>
    );
};

export default Topic;