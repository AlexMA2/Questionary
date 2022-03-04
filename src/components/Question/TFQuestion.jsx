import React from 'react'
import { useState } from 'react'

const TFQuestion = () => {
  const [answerSelected, setAnswerSelected] = useState(null)

  return (
    <div className="flex flex-row items-center">
      <button className="bg-green w-1/2 rounded-lg">Verdadero</button>
      <button className="bg-orange  w-1/2 rounded-lg">Falso</button>
    </div>
  )
}

export default TFQuestion
