import React from 'react'

const Answer = ({text = 'This should be an answer'}) => {
  return (
    <div className='bg-gray-light m-3 p-2 rounded-xl flex flex-row items-center'>
        <input type='checkbox' className='bg-gray rounded-full w-4 h-4 mr-2 align-middle' >

        </input>
        <div className='text-left'>
            {text}
        </div>        
    </div>
  )
}

export default Answer