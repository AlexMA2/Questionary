import React from 'react'
import { useState } from 'react'
const Answer = ({
  text = 'This should be an answer',
  selected,
  onSelectAnswer
}) => {
  const bgColor = selected ? 'bg-gray-light-200' : 'bg-gray-light'

  const handleClick = () => {
    onSelectAnswer(text)
  }

  return (
    <div
      className={`${bgColor} m-3 p-2 rounded-xl flex flex-row items-center cursor-pointer hover:bg-gray-light-200 focus:bg-violet-700`}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        className="bg-gray rounded-full w-4 h-4 mr-2 align-middle cursor-pointer"
        checked={selected}
        onChange={() => {}}
      ></input>
      <div className="text-left">{text}</div>
    </div>
  )
}

export default Answer
