import Button from '../../ui/Button'
import useAnswer from '../../hooks/useAnswer'

const ChoiceQuestion = ({ id, answers }) => {
  const [answerSelected, handleAnswerSelected] = useAnswer(id)

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
            value={ans.text}
            onClick={handleAnswerSelected}
            selected={answerSelected === ans.text}
          />
        )
      })}
    </div>
  )
}

export default ChoiceQuestion
