import React from 'react'
import Answer from './Answer'
import { useState, useEffect } from 'react'
import ChoiceQuestion from './ChoiceQuestion'
import FillQuestion from './FillQuestion'
import MatchQuestion from './MatchQuestion'
import TFQuestion from './TFQuestion'

const Question = ({type = 'choice', question, answers = [] }) => {

    if(type === 'choice'){           
        return(<ChoiceQuestion question = {question} answers={answers}/>)
    } else if (type === 'truefalse'){
        return(<TFQuestion  question = {question}/>)
    } else if (type === 'fillin'){
        return(<FillQuestion  question = {question} />)
    } else if (type === 'matching'){
        return(<MatchQuestion  question = {question} answers={answers} />)
    } else {
        return(null)
    }
  
}

export default Question