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

  const answersForMatch = [
    {
      id: 1,
      left: 'Answer 1 left',
      rigth: 'Answer 1'
    },
    {
      id: 2,
      left: 'Answer 2 LEFT',
      rigth: 'Answer 2'
    },
    {
      id: 3,
      left: 'Answer 3 left',
      rigth: 'Answer 3.'
    }
  ]

  return (
    <div className="App min-h-screen max-w-6xl m-auto ">
      <div className="bg-green-dark hidden"></div>
      <div className="bg-orange-dark hidden"></div>
      <div className="bg-gray-dark hidden"></div>
      <h1 className="text-3xl hover:saturate-50 font-bold underline bg-blend-screen">
        Examen
      </h1>

      <Question
        type={MULTIPLE_CHOICE}
        question="¿Cuanto es 2 + 2?"
        answers={answersForChoice}
      />
      <Question type={FILLIN} question="Escriba su opinion sobre Peru" />
      <Question type={TRUE_FALSE} question="¿Los peces viven en el agua?" />
      <Question
        type={MATCHING}
        question="Relaciona pais con gentilicio"
        answers={answersForMatch}
      />
    </div>
  )
}

export default App
