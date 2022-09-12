import React, { createContext, useState, useEffect, useMemo } from 'react';

import { getQuizzes, getMoreQuizzes } from '../data';
import { LSP } from '../managers';
import { SummaryPage, QuizModule } from '../pages';
import { Spinner } from '../components';

export const QuizContext = createContext({
  quizData: [],
  setQuizData: () => {},
  quizCount: 0,
  quizScore: 0,
  setQuizScore: () => {},
  fetchAdvancedQuiz: () => {},
  fetchBasicQuiz: () => {},
  setQuizCount: () => {},
});

export const App = () => {
  const [quizData, setQuizData] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCount, setQuizCount] = useState(LSP.getDataFromLocalStorage());
  const [showSpinner, showOrHideSpinner] = useState(false);

  const fetchAdvancedQuiz = async () => {
    showOrHideSpinner(true);
    try {
      const data = await getMoreQuizzes();
      setQuizData(data);
      showOrHideSpinner(false);
    } catch (error) {
      showOrHideSpinner(false);
      console.log('error fetching data', error);
    }
  };

  const fetchBasicQuiz = async () => {
    showOrHideSpinner(true);
    try {
      const data = await getQuizzes();
      setQuizData(data);
      showOrHideSpinner(false);
    } catch (error) {
      showOrHideSpinner(false);
      console.log('error fetching data', error);
    }
  };

  const value = useMemo(
    () => ({
      quizData,
      quizCount,
      setQuizData,
      fetchAdvancedQuiz,
      quizScore,
      setQuizScore,
      fetchBasicQuiz,
      setQuizCount,
    }),
    [quizData, quizCount, quizScore],
  );

  useEffect(() => {
    if (!quizCount) {
      fetchBasicQuiz();
    }
  }, []);

  return (
    <QuizContext.Provider value={value}>
      {showSpinner && <Spinner />}
      {!!quizData && quizData.length > 0 ? <QuizModule /> : <SummaryPage />}
    </QuizContext.Provider>
  );
};
