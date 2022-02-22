import { useState } from 'react'
import logo from '../../assets/logo.svg'
import './App.css'
import Editor from '../../components/Editor/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">    
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Editor />
     
    </div>
  )
}

export default App
