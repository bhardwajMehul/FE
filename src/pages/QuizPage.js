import React, { useContext } from 'react';

import { QuizContext } from '../context/QuizContext';
import { Parent } from '../components';

export const QuizPage = () => {
  const { quizData } = useContext(QuizContext);

  // component created to show the quiz final page
  return (
    <Parent>
      Take a Quiz
      {quizData.map(i => (
        <TakeQuizButton quizData={i} />
      ))}
    </Parent>
  );
};

const TakeQuizButton = ({ quizData }) => {
  return <button className=".takeQuizButton">{quizData.title}</button>;
};
