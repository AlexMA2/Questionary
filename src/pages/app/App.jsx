import Question from '../../components/Question/Question.jsx'
import {
  MULTIPLE_CHOICE,
  FILLIN,
  TRUE_FALSE,
  MATCHING
} from '../../utils/typesQuestions'

function App() {
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

  const questions = [
    {
      id: 1,
      type: MULTIPLE_CHOICE,
      heading: '¿Cuanto es 2 + 2?',
      answers: answersForChoice
    },
    {
      id: 2,
      type: FILLIN,
      heading: 'Escriba su opinion sobre Peru'
    },
    {
      id: 3,
      type: TRUE_FALSE,
      heading: '¿Los peces viven en el agua?'
    },
    {
      id: 4,
      type: MATCHING,
      heading: 'Relaciona pais con gentilicio',
      answers: answersForMatch
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

      <Question question={questions[0]} />
      <Question question={questions[1]} />
      <Question question={questions[2]} />
      <Question question={questions[3]} />
    </div>
  )
}

export default App
