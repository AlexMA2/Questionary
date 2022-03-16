import { useState, useEffect, useRef } from 'react'
import Button from '../../ui/Button'
import useAnswer from '../../hooks/useAnswer'

import { removeItem, randomizedArray } from '../../utils/array'

const MatchQuestion = ({ id, answers }) => {
  const [answerSelected, handleAnswerSelected] = useAnswer(id)

  const pointLeft = useRef(null)
  const pointRight = useRef(null)

  const [optionsLeft, setOptionsLeft] = useState([])
  const [optionsRight, setOptionsRight] = useState([])

  const [completeAnswer, setCompleteAnswer] = useState([])
  const [answerSelectedRight, setAnswerSelectedRight] = useState('')
  const [answerSelectedLeft, setAnswerSelectedLeft] = useState('')

  // Cuando una opcion intenta relacionarse con dos opciones
  const isAnswerDuplicated = (array, answer, anotherAnswer) => {
    return array.findIndex((item, index) => {
      if (item.L === answer) {
        return item.R !== anotherAnswer
      } else if (item.R === answer) {
        return item.L !== anotherAnswer
      }
      return false
    })
  }

  const fixDoubleAnswer = (array, answer, anotherAnswer) => {
    const itemFoundedIndex = isAnswerDuplicated(array, answer, anotherAnswer)

    if (itemFoundedIndex > -1) {
      const newCompleteAnswer = removeItem(array, itemFoundedIndex)
      return newCompleteAnswer
    }
    return array
  }

  useEffect(() => {
    setOptionsLeft(randomizedArray(answers.map((answer) => answer.left)))
    setOptionsRight(randomizedArray(answers.map((answer) => answer.rigth)))
  }, [answers])

  useEffect(() => {
    if (answerSelectedLeft !== '' && answerSelectedRight !== '') {
      let newCompleteAnswer = [...completeAnswer]
      newCompleteAnswer = fixDoubleAnswer(
        newCompleteAnswer,
        answerSelectedLeft,
        answerSelectedRight
      )

      newCompleteAnswer = fixDoubleAnswer(
        newCompleteAnswer,
        answerSelectedRight,
        answerSelectedLeft
      )

      newCompleteAnswer = [
        ...newCompleteAnswer,
        { L: answerSelectedLeft, R: answerSelectedRight }
      ]
      if (newCompleteAnswer.length <= answers.length) {
        setCompleteAnswer(newCompleteAnswer)
      }
      setAnswerSelectedRight('')
      setAnswerSelectedLeft('')
    }
  }, [answerSelectedLeft, answerSelectedRight])

  useEffect(() => {
    // Funcion para dibujar una linea entre dos puntos sin CANVAS

    if (completeAnswer.length === answers.length) {
      handleAnswerSelected(completeAnswer)
    }
  }, [completeAnswer])

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
                  checked={answerSelectedLeft === opt}
                  onChange={() => {}}
                  ref={pointLeft}
                ></input>
              }
              elementPosition="right"
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
      <div className="w-1/2 flex flex-col items-center justify-center">
        {optionsRight.map((opt, index) => {
          return (
            <Button
              key={index}
              element={
                <input
                  type="radio"
                  className="bg-gray rounded-full w-4 h-4 mr-2 align-middle relative left-3 cursor-pointer"
                  checked={answerSelectedRight === opt}
                  onChange={() => {}}
                  ref={pointRight}
                ></input>
              }
              elementPosition="left"
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
    </div>
  )
}

export default MatchQuestion
