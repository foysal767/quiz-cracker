import React from 'react';
import { Form } from 'react-bootstrap';

const Answer = ({ option, question }) => {
    console.log(question)
    const handleRadioBtn = () => {
        if(option === question.correctAnswer){
            alert("Great! You Select Correct Answer")
        } else {
            alert("Opps! You Select Wrong Answer")
        }
    }
    return (
        <Form.Check onClick={()=>handleRadioBtn()} className='w-30 text-left m-1 rounded' style={{border: "1px solid white"}}
            label={option}
            name={question.id}
            type="radio"
            id={option}
        />

    );
};

export default Answer;