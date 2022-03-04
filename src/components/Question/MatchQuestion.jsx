import React from "react";

const MatchQuestion = ({question, answers}) => {
  return (
    <div>
      <h1 className="text-8x1 antialiased font-bold">{question}</h1>

      <div className="flex flex-row items-center">
        <div className="w-1/2">
            {
                answers.map((opt) => {
                    <button> {opt}</button>
                })
            }

        </div>
        <div className="w-1/2">
            {
                answers.map((mat) => {
                    <button> {mat}</button>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default MatchQuestion;
