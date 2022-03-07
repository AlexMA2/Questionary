import React from 'react'
import { useState } from 'react'
import TFQuestionButton from '../TFQuestionButton'
import { IS_TRUE, IS_FALSE } from '../../utils/TFQuestionAnswers'

const TFQuestion = () => {
  const [answerSelected, setAnswerSelected] = useState(null)

  const handleAnswerSelected = (name) => {
    setAnswerSelected(name)
  }

  return (
    <div className="flex flex-row w-full items-center">
      <TFQuestionButton
        name={IS_TRUE}
        color="bg-green"
        onClick={handleAnswerSelected}
        selected={answerSelected === IS_TRUE}
      />
      <TFQuestionButton
        name={IS_FALSE}
        color="bg-orange"
        onClick={handleAnswerSelected}
        selected={answerSelected === IS_FALSE}
      />
    </div>
  )
}

export default TFQuestion
