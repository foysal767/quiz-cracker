import React from 'react';

const Answer = ({ option, question }) => {
    console.log(question)
    return (
        <div>
            <p className='bg-danger' onClick={(e) => console.log(e.target.innerText === question.correctAnswer)}>{option}</p>
        </div>
    );
};

export default Answer;