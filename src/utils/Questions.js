import { MULTIPLE_CHOICE, FILLIN, TRUE_FALSE, MATCHING } from './CONSTANTS.js'

const questions = [
  {
    id: 1,
    type: MULTIPLE_CHOICE,
    heading: '¿Cuanto es 2 + 2?',
    answers: [
      {
        id: 1,
        text: '5',
        correct: true
      },
      {
        id: 2,
        text: '1',
        correct: false
      },
      {
        id: 3,
        text: '4',
        correct: false
      }
    ]
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
    answers: [
      {
        id: 1,
        left: 'Perú',
        rigth: 'Peruano'
      },
      {
        id: 2,
        left: 'Chile',
        rigth: 'Chileno'
      },
      {
        id: 3,
        left: 'Argentina',
        rigth: 'Argentino'
      },
      {
        id: 4,
        left: 'Brasil',
        rigth: 'Brasileño'
      },
      {
        id: 5,
        left: 'Colombia',
        rigth: 'Colombiano'
      }
    ]
  }
]

export { questions }
