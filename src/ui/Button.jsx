import React from 'react'

const Button = ({
  element,
  elementPosition = 'none',
  backgroundColor = 'bg-gray',
  width = 'w-11/12',
  text = 'This should be a button',
  onClick,
  selected
}) => {
  const bgColor = selected ? `${backgroundColor}-dark` : `${backgroundColor}`

  const handleClick = () => {
    onClick(text)
  }

  return (
    <div
      className={`${bgColor} ${width} h-10 mx-2  rounded-lg m-3 flex flex-row items-center text-center cursor-pointer`}
    >
      {elementPosition === 'left' && element}
      <button className="w-full h-full text-center" onClick={handleClick}>
        {text}
      </button>
      {elementPosition === 'right' && element}
    </div>
  )
}

export default Button
