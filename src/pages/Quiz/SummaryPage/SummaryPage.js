import React, { useContext } from 'react';

import { QuizContext } from '../../../context/QuizContext';
import { Parent } from '../../../components';
import './SummaryPage.css';

export const SummaryPage = () => {
  const { quizCount, fetchBasicQuiz, fetchAdvancedQuiz } = useContext(
    QuizContext,
  );

  return (
    <Parent>
      <h2>Take a Quiz</h2>
      <p>You have taken the quiz {quizCount} times.</p>
      <button onClick={fetchBasicQuiz}>Retake Quiz</button>
      <button onClick={fetchAdvancedQuiz}>Take Advanced Quiz</button>
    </Parent>
  );
};
