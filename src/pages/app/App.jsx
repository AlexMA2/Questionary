import { useState } from 'react'
import Question from '../../components/Question/Question.jsx'
import {
  MULTIPLE_CHOICE,
  FILLIN,
  TRUE_FALSE,
  MATCHING
} from '../../utils/typesQuestions'

function App() {
  const [count, setCount] = useState(0)

  const answersForChoice = [
    {
      id: 1,
      text: 'Answer 1',
      correct: true
    },
    {
      id: 2,
      text: 'Answer 2',
      correct: false
    },
    {
      id: 3,
      text: 'Answer 3',
      correct: false
    }
  ]

  const answersForTF = [
    {
      id: 1,
      text: 'Answer 1',
      correct: true
    },
    {
      id: 2,
      text: 'Answer 2',
      correct: false
    },
    {
      id: 3,
      text: 'Answer 3',
      correct: false
    }
  ]

  const answersForMatch = [
    {
      id: 1,
      left: 'Answer 1',
      rigth: 'Answer 2'
    },
    {
      id: 2,
      left: 'Answer 1',
      rigth: 'Answer 2'
    },
    {
      id: 3,
      left: 'Answer 1',
      rigth: 'Answer 2'
    }
  ]

  return (
    <div className="App min-h-screen max-w-6xl m-auto">
      <h1 className="text-3xl font-bold underline">Examen</h1>

      <Question
        type={MULTIPLE_CHOICE}
        question="¿Cuanto es 2 + 2?"
        answers={answersForChoice}
      />
      <Question type={FILLIN} question="Escriba su opinion sobre Peru" />
    </div>
  )
}

export default App
