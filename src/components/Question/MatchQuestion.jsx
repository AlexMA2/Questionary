import React from 'react'

const MatchQuestion = ({ answers }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-1/2">
        {answers.map((opt) => {
          ;<button> {opt}</button>
        })}
      </div>
      <div className="w-1/2">
        {answers.map((mat) => {
          ;<button> {mat}</button>
        })}
      </div>
    </div>
  )
}

export default MatchQuestion
