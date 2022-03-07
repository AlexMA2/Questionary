import Answer from '../Answer'
import { useState } from 'react'
import Button from '../../ui/Button'

const ChoiceQuestion = ({ answers }) => {
  const [answerSelected, setAnswerSelected] = useState('')

  const onSelectAnswer = (answer) => {
    setAnswerSelected(answer)
  }

  return (
    <div>
      {answers.map((ans) => {
        return (
          <Button
            key={ans.id}
            element={
              <input
                type="checkbox"
                className="bg-gray rounded-full w-4 h-4 mr-2 align-middle relative left-3 cursor-pointer"
                checked={answerSelected === ans.text}
                onChange={() => {}}
              ></input>
            }
            elementPosition="left"
            backgroundColor="bg-gray"
            width="w-11/12"
            text={ans.text}
            onClick={onSelectAnswer}
            selected={answerSelected === ans.text}
          />
        )
      })}
    </div>
  )
}

export default ChoiceQuestion
