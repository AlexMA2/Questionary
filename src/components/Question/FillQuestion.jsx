import { useState } from 'react'
import Button from '../../ui/Button'
import useAnswer from '../../hooks/useAnswer'

const FillQuestion = ({ id }) => {
  const [answerSelected, handleAnswerSelected] = useAnswer(id)

  const [text, setText] = useState('')

  return (
    <div className="w-2/3 m-auto">
      <textarea
        className="border-2 drop-shadow-lg rounded-xl p-3 border-slate-800 w-full resize-none focus:border-gray-light"
        name="answer"
        id=""
        cols="50"
        rows="10"
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}
      ></textarea>
      <div className="flex flex-row w-full justify-center">
        <Button
          backgroundColor="bg-slate-300"
          width="w-40"
          text="Guardar"
          value={text}
          onClick={handleAnswerSelected}
        ></Button>
        <Button
          backgroundColor="bg-slate-300"
          width="w-40"
          text="Borrar Todo"
          value={text}
          onClick={() => {
            setText('')
          }}
        ></Button>
      </div>
    </div>
  )
}

export default FillQuestion
