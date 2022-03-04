import React from 'react'
import Answer from '../Answer'
import { useState, useEffect } from 'react'
import ChoiceQuestion from './ChoiceQuestion'
import FillQuestion from './FillQuestion'
import MatchQuestion from './MatchQuestion'
import TFQuestion from './TFQuestion'

const Question = ({type = 'choice', question, answers = [] }) => {

    const [typeQuestion, setTypeQuestion] = useState(null)

    useEffect(() => {
        switch (type) {
            case 'choice':
                setTypeQuestion(<ChoiceQuestion question={question} answers={answers} />)
                break;
            case 'fill':
                setTypeQuestion(<FillQuestion question={question} />)
                break;
            case 'match':
                setTypeQuestion(<MatchQuestion question={question} answers={answers} />)
                break;
            case 'tf':
                setTypeQuestion(<TFQuestion question={question} />)
                break;
            default:
                setTypeQuestion(<ChoiceQuestion question={question} answers={answers} />)
                break;
        }
    }, [])

    return (
        <div>
            <h1 className='text-8x1 antialiased font-bold'>{question}</h1>
            {typeQuestion}
        </div>
    )  
  
}

export default Question