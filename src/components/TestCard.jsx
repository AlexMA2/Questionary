import React from 'react'
import { Link } from 'react-router-dom'

const TestCard = ({ title }) => {
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1> {title} </h1>
      <button>
        <Link to="/tests/1"> Ir al examen </Link>
      </button>
    </div>
  )
}

export default TestCard
