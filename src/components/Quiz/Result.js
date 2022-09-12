import React, { memo } from 'react';

import { Parent } from '../Parent/Parent';
import { getMessage } from '.././../data';

export const Result = memo(
  ({ questionLength, score, moveToSummary, retakeQuiz }) => {
    return (
      <Parent>
        <h1>You have completed the quiz</h1>
        <p>
          You got {score} of {questionLength} correct!
        </p>
        <p>{getMessage()}</p>

        <button onClick={retakeQuiz}>Retake</button>
        <button onClick={moveToSummary}>Next</button>
      </Parent>
    );
  },
);
