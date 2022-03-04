import React from "react";
import { useState } from "react";

const TFQuestion = ({ question }) => {
  const [answerSelected, setAnswerSelected] = useState(null);

  return (
    <div>
      <h1 className='text-4xl antialiased font-bold'>{question}</h1>
      <div className="flex flex-row items-center">
        <button className="bg-green w-1/2 rounded-lg">Verdadero</button>
        <button className="bg-orange  w-1/2 rounded-lg">Falso</button>
      </div>
    </div>
  );
};

export default TFQuestion;
