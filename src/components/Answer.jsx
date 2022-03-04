import React from 'react'

const Answer = ({
  text = 'This should be an answer',
  selected,
  onSelectAnswer
}) => {
  return (
    <div
      className="bg-gray-light m-3 p-2 rounded-xl flex flex-row items-center"
      onClick={(ev) => {
        onSelectAnswer(ev, text)
      }}
    >
      <input
        type="checkbox"
        className="bg-gray rounded-full w-4 h-4 mr-2 align-middle"
        checked={selected}
      ></input>
      <div className="text-left">{text}</div>
    </div>
  )
}

export default Answer
