import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./App.css";
import Question from "../../components/Question";

function App() {
  const [count, setCount] = useState(0);

  const answersForChoice = [
    {
      id: 1,
      text: "Answer 1",
      correct: true,
    },
    {
      id: 2,
      text: "Answer 2",
      correct: false,
    },
    {
      id: 3,
      text: "Answer 3",
      correct: false,
    },
  ];

  const answersForFillin = [
    {
      id: 1,
      text: "Answer 1",
      correct: true,
    },
    {
      id: 2,
      text: "Answer 2",
      correct: false,
    },
    {
      id: 3,
      text: "Answer 3",
      correct: false,
    },
  ];

  const answersForTF = [
    {
      id: 1,
      text: "Answer 1",
      correct: true,
    },
    {
      id: 2,
      text: "Answer 2",
      correct: false,
    },
    {
      id: 3,
      text: "Answer 3",
      correct: false,
    },
  ];

  const answersForMatch = [
    {
      id: 1,
      left: "Answer 1",
      rigth: "Answer 2",
    },
    {
      id: 2,
      left: "Answer 1",
      rigth: "Answer 2",
    },
    {
      id: 3,
      left: "Answer 1",
      rigth: "Answer 2",
    },
  ];

  return (
    <div className="App min-h-screen max-w-6xl m-auto">
      <h1 className="text-3xl font-bold underline">Examen</h1>
      <Question
        type="truefalse"
        question="PREGUNTA"
        answers={answersForChoice}
      />
      <Question type="fillin" question="PREGUNTA" answers={answersForFillin} />
      <Question type="choice" question="PREGUNTA" answers={answersForTF} />
      
    </div>
  );
}

export default App;
