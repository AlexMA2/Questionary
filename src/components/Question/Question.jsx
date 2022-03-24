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
} from '../../utils/CONSTANTS.js'

const Question = ({ question }) => {
  const [typeQuestion, setTypeQuestion] = useState(null)

  const { id, type, heading, answers } = question

  useEffect(() => {
    switch (type) {
      case MULTIPLE_CHOICE:
        setTypeQuestion(<ChoiceQuestion id={id} answers={answers} />)
        break
      case FILLIN:
        setTypeQuestion(<FillQuestion id={id} />)
        break
      case MATCHING:
        setTypeQuestion(<MatchQuestion id={id} answers={answers} />)
        break
      case TRUE_FALSE:
        setTypeQuestion(<TFQuestion id={id} />)
        break
      default:
        setTypeQuestion(<ChoiceQuestion id={id} answers={answers} />)
        break
    }
  }, [])

  return (
    <div>
      <h1 className="text-4xl text-center my-5 antialiased font-bold">
        {heading}
      </h1>
      {typeQuestion}
    </div>
  )
}

export default Question
