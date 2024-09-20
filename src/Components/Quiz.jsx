import { useState, useCallback, useRef, useReducer } from 'react';
import Questions from '../Questions';
import Question from './Question';
import Summary from './Summary';

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);
    const [answerState, setselectedAnswer] = useState("")

    const activeQuestion = answerState === "" ? userAnswer.length : userAnswer.length - 1;
    const quizIsComplete = activeQuestion === Questions.length

    const handleSelect = useCallback(function handleSelect(selectedAnswer) {
        setselectedAnswer("selected")
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });
        setTimeout(() => {
            if (selectedAnswer === Questions[activeQuestion].answers[0]) {
                setselectedAnswer("correct")
            } else {
                setselectedAnswer("wrong")
            }
            setTimeout(() => {
                setselectedAnswer("")
            }, 2000)
        }, 1000)

    }, [activeQuestion]);

    const handleSkipAnswer = useCallback(() => { handleSelect(null) }, [handleSelect])

    if (quizIsComplete) {
       return<Summary userAnswers={userAnswer}/>
    }
    console.log(userAnswer[userAnswer.length] - 1)
    return (
        <div id='quiz'>
            <Question questionText={Questions[activeQuestion].text} answers={Questions[activeQuestion].answers}
            onSelectAnswers={handleSelect} selectedAnswer={userAnswer[userAnswer.length - 1]} answerState={answerState}
            onSkipAnswer={handleSkipAnswer} key={activeQuestion} />
        </div>

    );
}
