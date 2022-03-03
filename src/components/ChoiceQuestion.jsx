import React from 'react'
import Answer from './Answer'
import { useState } from 'react'

const ChoiceQuestion = ({question, answers}) => {

  const [answerSelected, setAnswerSelected] = useState(null)

  return (
    <div>
        <h1 className='text-8x1 antialiased font-bold'>{question}</h1>
        {
            answers.map(ans => {
                return <Answer key={ans.id} text={ans.text} />
            })
        }
    </div>
  )
}

export default ChoiceQuestion