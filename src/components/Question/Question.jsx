import React, { useEffect, useState } from 'react'
import ChoiceQuestion from './ChoiceQuestion'
import FillQuestion from './FillQuestion'
import MatchQuestion from './MatchQuestion'
import TFQuestion from './TFQuestion'

import {
  MULTIPLE_CHOICE,
  FILLIN,
  TRUE_FALSE,
  MATCHING
} from '../../utils/typesQuestions'

const Question = ({ type = MULTIPLE_CHOICE, question, answers = [] }) => {
  const [typeQuestion, setTypeQuestion] = useState(null)

  useEffect(() => {
    switch (type) {
      case MULTIPLE_CHOICE:
        setTypeQuestion(<ChoiceQuestion answers={answers} />)
        break
      case FILLIN:
        setTypeQuestion(<FillQuestion />)
        break
      case MATCHING:
        setTypeQuestion(<MatchQuestion answers={answers} />)
        break
      case TRUE_FALSE:
        setTypeQuestion(<TFQuestion />)
        break
      default:
        setTypeQuestion(<ChoiceQuestion answers={answers} />)
        break
    }
  }, [])

  return (
    <div>
      <h1 className="text-8x1 antialiased font-bold">{question}</h1>
      {typeQuestion}
    </div>
  )
}

export default Question
