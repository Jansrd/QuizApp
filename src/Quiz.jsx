import React, { useState } from 'react'
import { questions } from './Questions'
import './style/Quiz.css'

const Quiz = ({ retry }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const answerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className="quiz">
            {
                showScore ? (
                    <div className="score">
                        You scored {score} out of {questions.length}!
                        <button onClick={retry}>Retry</button>
                    </div>
                ) : (
                    <div className="quiz__started">
                        <div className="home__title">
                            <h2>My Quiz</h2>
                        </div>
                        <div className="question__section">
                            <div className="question__count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question__text">
                                {questions[currentQuestion].question}
                            </div>
                        </div>
                        <div className="answer__section">
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => answerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Quiz