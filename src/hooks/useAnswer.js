import { useState } from 'react'

export default function useAnswer(id) {
  const [answerSelected, setAnswerSelected] = useState(null)

  const checkIfQuestionIsAnswered = () => {
    const answersStored = JSON.parse(localStorage.getItem('answers'))
    const answerIndex = answersStored.findIndex((answer) => answer.id === id)
    return answerIndex
  }

  const handleAnswerSelected = (name) => {
    setAnswerSelected(name)
    const answersStored = JSON.parse(localStorage.getItem('answers'))
    const answerToSaved = { id: id, answer: name }
    if (answersStored) {
      const answerIndex = checkIfQuestionIsAnswered()
      if (answerIndex !== -1) {
        console.log('La respuesta YA estaba registrada')
        answersStored[answerIndex].answer = name
        localStorage.setItem('answers', JSON.stringify(answersStored))
      } else {
        console.log('La respuesta NO estaba registrada')
        localStorage.setItem(
          'answers',
          JSON.stringify([...answersStored, answerToSaved])
        )
      }
    } else {
      localStorage.setItem('answers', JSON.stringify([answerToSaved]))
    }
  }

  return [answerSelected, handleAnswerSelected]
}
