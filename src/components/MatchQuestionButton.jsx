import React from 'react'

const MatchQuestionButton = ({ text, selected }) => {
  const bgColor = selected ? 'bg-gray-light-200' : 'bg-gray-light'

  return (
    <div
      className={`${bgColor} rounded-xl h-12 cursor-pointer hover:bg-gray-light-200 my-2 flex justify-centerw-11/12 text-center`}
    >
      <button>{text}</button>
    </div>
  )
}

export default MatchQuestionButton
