import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    return (
            // <Col>
            //   <Card className='w-75 mb-4 px-4 py-4 mx-auto'>
            //     <Card.Img className='rounded bg-dark mb-4' variant="top" src={logo} />
            //     <h4>Topic: {name}</h4>
            //     <p>Total Quiz: {total}</p>
            //     <Button variant="info" className='w-50 mx-auto'>Practice</Button>
            //   </Card>
            // </Col>



        // <div className='bg-warning'>
        //     <h4>{name}</h4>
        //     <img src={logo} alt="" />
        //     <h5>Total quiz: {total}</h5>
        // </div>
    );
};

export default Topic;