import React from 'react'
import Question from '../../components/Question/Question.jsx'
import { questions } from '../../utils/Questions.js'
const Test = ({ title = 'Test' }) => {
  return (
    <div className=" max-w-6xl m-auto ">
      <h1 className="text-5xl hover:saturate-50 underline text-center bg-blend-screen font-extralight">
        {title}
      </h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  )
}

export default Test
