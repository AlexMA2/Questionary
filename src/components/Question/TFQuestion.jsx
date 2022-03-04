import React from 'react'
import { useState } from 'react'

const TFQuestion = () => {
  const [answerSelected, setAnswerSelected] = useState(null)

  return (
    <div className="flex flex-row w-full items-center">
      <button className="bg-green hover:opacity-90 w-1/2 h-10 mx-2 rounded-lg">
        Verdadero
      </button>
      <button className="bg-orange hover:opacity-90 w-1/2 h-10 mx-2 rounded-lg">
        Falso
      </button>
    </div>
  )
}

export default TFQuestion
