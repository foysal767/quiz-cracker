import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuesAns from '../QuesAns/QuesAns';

const Quiz = ({params}) => {
    const topic = useLoaderData();
    const quiz = topic.data;
    return (
        <div className='my-4'>
            <h4>Quiz: {quiz.name}</h4>
            {
                (quiz.questions).map(question => <QuesAns 
                key={question.id}
                question={question}
                ></QuesAns>)
            }
        </div>
    );
};

export default Quiz;