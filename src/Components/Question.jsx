import Progress from "./Progress"
import Answers from "./Answers"


export default function Question({questionText , answers ,onSelectAnswers ,selectedAnswer,answerState , onSkipAnswer}){
    let timer = 10000

    return <div id='question'>
    <Progress timeout={timer} onTimeout={onSkipAnswer} />
    <h2>{questionText}</h2>
    <Answers 
    answers={answers} 
    selectedAnswer={selectedAnswer}
    answerState={answerState} onSelect={onSelectAnswers} />

</div>
}