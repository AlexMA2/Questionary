import React from 'react'

const TFQuestionButton = ({ name, color, onClick, selected }) => {
  const opacity = selected ? 'opacity-70' : 'opacity-100'

  const handleClick = () => {
    onClick(name)
  }

  return (
    <button
      className={`${color} hover:backdrop-brightness-100 w-1/2 h-10 mx-2 rounded-lg`}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}

export default TFQuestionButton
