import React from 'react'
import Answer from '../Answer'
import { useState } from 'react'

const ChoiceQuestion = ({ answers }) => {
  const [answerSelected, setAnswerSelected] = useState('')

  const onSelectAnswer = (answer) => {
    setAnswerSelected(answer)
  }

  return (
    <div>
      {answers.map((ans) => {
        return (
          <Answer
            key={ans.id}
            text={ans.text}
            selected={answerSelected === ans.text}
            onSelectAnswer={onSelectAnswer}
          />
        )
      })}
    </div>
  )
}

export default ChoiceQuestion
