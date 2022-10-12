import React from 'react';
import Answer from '../Answer/Answer';
import { EyeIcon } from '@heroicons/react/24/solid'
import { Container, Form, Row } from 'react-bootstrap';


const QuesAns = ({ question }) => {
    const handleEyeBtn = () => {
        alert(`Correct Answer is: ${question.correctAnswer}`)
    };
    return (
        <div className='w-50 rounded mx-auto my-4 py-4 text-white fs-5' style={{ border: '1px solid lightblue', backgroundColor: '#445760' }}>
            <div className='d-flex'>
                <h5 className='mx-auto'>{question.question}</h5>
                <EyeIcon onClick={() => handleEyeBtn()} className="text-white me-4" style={{ width: '20px' }} />
            </div>
            <Form className='form mx-auto'>
                <Container className='mx-auto'>
                    <Row xs={1} md={2} className=" text-center mx-auto rounded">
                        {
                            (question.options).map((option, index) => <Answer
                                key={index}
                                option={option}
                                question={question}
                            ></Answer>)
                        }
                    </Row>
                </Container>
            </Form>
        </div>
    );
};

export default QuesAns;