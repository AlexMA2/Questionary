import React from 'react'

const FillQuestion = ({question}) => {
  return (
    <div>
        <h1 className='text-8x1 antialiased font-bold'>{question}</h1>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  )
}

export default FillQuestion