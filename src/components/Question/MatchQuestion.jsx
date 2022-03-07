import { useState, useEffect } from 'react'
import MatchQuestionButton from '../MatchQuestionButton'

const MatchQuestion = ({ answers }) => {
  const [optionsLeft, setOptionsLeft] = useState([])

  const [optionsRight, setOptionsRight] = useState([])

  const randomizedArray = (array) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = newArray[i]
      newArray[i] = newArray[j]
      newArray[j] = temp
    }
    return newArray
  }

  useEffect(() => {
    setOptionsLeft(randomizedArray(answers.map((answer) => answer.left)))
    setOptionsRight(randomizedArray(answers.map((answer) => answer.rigth)))
  }, [answers])

  return (
    <div className="flex flex-row items-center">
      <div className="w-1/2 ">
        {optionsLeft.map((opt, index) => {
          return <MatchQuestionButton key={index} text={opt} />
        })}
      </div>
      <div className="w-1/2 ">
        {optionsRight.map((opt, index) => {
          return <MatchQuestionButton key={index} text={opt} />
        })}
      </div>
    </div>
  )
}

export default MatchQuestion
