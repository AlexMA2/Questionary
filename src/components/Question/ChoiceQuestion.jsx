import React from 'react'
import Answer from '../Answer'
import { useState } from 'react'

const ChoiceQuestion = ({question, answers}) => {

  const [answerSelected, setAnswerSelected] = useState(null)

  return (
    <div>
        
        {
            answers.map(ans => {
                return <Answer key={ans.id} text={ans.text} />
            })
        }
    </div>
  )
}

export default ChoiceQuestion