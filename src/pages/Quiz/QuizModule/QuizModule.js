import React, { useState, useContext } from 'react';

import { QuizContext } from '../../../context/QuizContext';
import { QnA, Result } from '../../../components/Quiz';
import { LSP } from '../../../managers';

export const QuizModule = () => {
  const {
    quizData,
    quizScore,
    setQuizScore,
    setQuizData,
    setQuizCount,
  } = useContext(QuizContext);

  const [quizIndex, changeQuizIndex] = useState(0);
  const [questionIndex, changeQuestionIndex] = useState(0);

  if (
    quizIndex < quizData.length &&
    questionIndex < quizData[quizIndex].questions.length
  ) {
    return (
      <QnA
        title={quizData[quizIndex].title}
        options={[
          ...quizData[quizIndex].questions[questionIndex].incorrectAnswers,
          quizData[quizIndex].questions[questionIndex].correctAnswer,
        ].sort(() => 0.5 - Math.random())}
        question={quizData[quizIndex].questions[questionIndex].text}
        answer={quizData[quizIndex].questions[questionIndex].correctAnswer}
        onNext={res => {
          setQuizScore(quizScore + res);
          if (questionIndex + 1 === quizData[quizIndex].questions.length) {
            changeQuizIndex(quizIndex + 1);
            changeQuestionIndex(0);
          } else {
            changeQuestionIndex(questionIndex + 1);
          }
        }}
        key={`quiz${quizIndex}-question${questionIndex}`}
      />
    );
  }

  return (
    <Result
      questionLength={quizData.reduce((acc, i) => {
        acc += i.questions.length;
        return acc;
      }, 0)}
      score={quizScore}
      retakeQuiz={() => {
        setQuizScore(0);
        changeQuizIndex(0);
      }}
      moveToSummary={() => {
        setQuizData(null);
        const count = LSP.getDataFromLocalStorage();
        LSP.saveDataToLocalStorage(!!count ? count + 1 : 1);
        setQuizCount(LSP.getDataFromLocalStorage());
      }}
    />
  );
};
