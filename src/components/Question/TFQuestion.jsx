import useAnswer from '../../hooks/useAnswer'
import { IS_TRUE, IS_FALSE } from '../../utils/CONSTANTS.JS'
import Button from '../../ui/Button'

const TFQuestion = ({ id }) => {
  const [answerSelected, handleAnswerSelected] = useAnswer(id)

  return (
    <div className="flex flex-row w-full items-center">
      <Button
        backgroundColor="bg-green"
        width="w-1/2"
        text={IS_TRUE}
        value={IS_TRUE}
        onClick={handleAnswerSelected}
        selected={answerSelected === IS_TRUE}
      />
      <Button
        backgroundColor="bg-orange"
        width="w-1/2"
        text={IS_FALSE}
        value={IS_FALSE}
        onClick={handleAnswerSelected}
        selected={answerSelected === IS_FALSE}
      />
    </div>
  )
}

export default TFQuestion
