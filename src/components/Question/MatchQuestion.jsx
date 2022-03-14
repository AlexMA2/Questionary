import { useState, useEffect } from 'react'
import Button from '../../ui/Button'
import useAnswer from '../../hooks/useAnswer'

const MatchQuestion = ({ id, answers }) => {
  const [answerSelected, handleAnswerSelected] = useAnswer(id)

  const [optionsLeft, setOptionsLeft] = useState([])
  const [optionsRight, setOptionsRight] = useState([])

  const [completeAnswer, setCompleteAnswer] = useState([])
  const [answerSelectedRight, setAnswerSelectedRight] = useState('')
  const [answerSelectedLeft, setAnswerSelectedLeft] = useState('')

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

  useEffect(() => {
    if (answerSelectedLeft !== '' && answerSelectedRight !== '') {
      setCompleteAnswer(answerSelectedLeft + '-' + answerSelectedRight)
    }
  }, [answerSelectedLeft, answerSelectedRight])

  return (
    <div className="flex flex-row items-center">
      <div className="w-1/2 flex items-center flex-col">
        {optionsLeft.map((opt, index) => {
          return (
            <Button
              key={index}
              element={
                <input
                  type="radio"
                  className="bg-gray rounded-full w-4 h-4 mr-2 align-middle relative right-3 cursor-pointer"
                  checked={answerSelectedRight === opt}
                  onChange={() => {}}
                ></input>
              }
              elementPosition="right"
              backgroundColor="bg-gray"
              width="w-10/12"
              text={opt}
              value={opt}
              onClick={() => {
                setAnswerSelectedRight(opt)
              }}
              selected={answerSelectedRight === opt}
            />
          )
        })}
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        {optionsRight.map((opt, index) => {
          return (
            <Button
              key={index}
              element={
                <input
                  type="radio"
                  className="bg-gray rounded-full w-4 h-4 mr-2 align-middle relative left-3 cursor-pointer"
                  checked={answerSelectedLeft === opt}
                  onChange={() => {}}
                ></input>
              }
              elementPosition="left"
              backgroundColor="bg-gray"
              width="w-10/12"
              text={opt}
              value={opt}
              onClick={() => {
                setAnswerSelectedLeft(opt)
              }}
              selected={answerSelectedLeft === opt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MatchQuestion
