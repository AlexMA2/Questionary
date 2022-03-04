import React from 'react'
import { useState } from 'react'

const FillQuestion = () => {
  const [answer, setAnswer] = useState('')

  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  return (
    <div className="w-2/3 m-auto">
      <textarea
        className="border-2 drop-shadow-lg rounded-xl p-3 border-slate-800 w-full resize-none focus:border-gray-light"
        name="answer"
        id=""
        cols="50"
        rows="10"
        onChange={handleChange}
      ></textarea>
    </div>
  )
}

export default FillQuestion
