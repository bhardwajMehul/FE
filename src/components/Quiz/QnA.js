import React, { useState, useEffect } from 'react';

import { Parent } from '../../components';
import './QnA.css';

export const QnA = ({ title, options, question, answer, onNext }) => {
  const [selected, changeSelected] = useState(null);

  useEffect(() => {
    changeSelected(null);
  }, [title, options, question, answer, onNext]);

  return (
    <Parent>
      <h1>{title}</h1>
      <h4>{question}</h4>
      <ol type="A">
        {options.map((i, ix) => (
          <li
            className={`${
              selected === ix && options[selected] === answer
                ? 'correct'
                : selected && selected !== ix && options[ix] === answer
                ? 'correct'
                : ''
            } ${
              selected === ix && options[selected] !== answer ? 'incorrect' : ''
            }`}
            onClick={() => selected === null && changeSelected(ix)}
          >
            {i}
          </li>
        ))}
      </ol>
      {selected !== null && (
        <button
          className="nextButton"
          onClick={() => onNext(options[selected] === answer ? 1 : 0)}
        >
          Next
        </button>
      )}
    </Parent>
  );
};
