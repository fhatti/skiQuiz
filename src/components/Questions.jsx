import React, { useState } from "react";
import questionsData from "../data";

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    questionsData[Math.floor(Math.random() * questionsData.length)]
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);

  const heartsArray = Array.from({ length: lives }, (_, index) => (
    <span key={index} className="p-1">
      ❤️
    </span>
  ));

  const handleAnswerChange = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === correctAnswerIndex) {
      setScore(score + 10);
    } else setLives(lives - 1);
    setSubmitted(true);
  };

  const handleSkip = () => {
    setCurrentQuestion(
      questionsData[Math.floor(Math.random() * questionsData.length)]
    );
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  const resetQuiz = () => {
    setScore(score * 0);
    setLives(5);
    setSelectedAnswer(null);
    setCurrentQuestion(
      questionsData[Math.floor(Math.random() * questionsData.length)]
    );
  };

  const correctAnswerIndex = currentQuestion.answer.findIndex((a) => a.correct);

  return (
    <div className="flex flex-col container-2xl">
      <h2 className="absolute top-20 left-25 right-20">
        Hi there, {props.name}
      </h2>
      <p className="absolute top-20 left-25 right-20 mt-10">
        Dein Score: {score}
      </p>
      <div>
        <div className="flex justify-between items-center">
          <div className="lives-container">{heartsArray}</div>
          <p>
            Katerogie:{" "}
            <a
              href={currentQuestion.categoryUrl}
              className="underline cursor-pointer font-bold"
            >
              {currentQuestion.category}
            </a>{" "}
          </p>
        </div>
        <h3 className="text-4xl p-2">{currentQuestion.question}</h3>
        <ul>
          {currentQuestion.answer.map((ans, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => handleAnswerChange(index)}
                  disabled={submitted}
                  className="p-10 bg-black m-10"
                />
                {ans.text}
              </label>
            </li>
          ))}
        </ul>
        {!submitted && (
          <div className="mt-10 flex justify-around items-center">
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="bg-second py-2 px-6 text-bgColor"
            >
              Antwort einreichen
            </button>
            <button onClick={handleSkip} className="font-light">
              Frage überspringen
            </button>
          </div>
        )}
        {submitted && (
          <div>
            <p>
              {selectedAnswer === correctAnswerIndex
                ? "Richtig!"
                : `Falsch! Die richtige Antwort war: ${currentQuestion.answer[correctAnswerIndex].text}`}
            </p>
            <button onClick={handleSkip}>Nächste Frage</button>
            <button onClick={resetQuiz}>Reset</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
