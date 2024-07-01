import React, { useState, useEffect } from "react";
import questionsData from "../data";
import QuestionsList from "../models/Question";
import QuizEndStats from "./QuizEndStats";
import PlayerCard from "./PlayerCard";
import Button from "./Button";

const Questions = ({ playerName, startQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [endGame, setEndGame] = useState(false);
  const [questionsOrder, setQuestionsOrder] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(null);
  const questionsDataBase = new QuestionsList(questionsData);
  questionsDataBase.writeQuestionsData();
  useEffect(() => {
    const shuffledQuestions = [...questionsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestionsOrder(shuffledQuestions);
    setCurrentQuestion(shuffledQuestions[0]);
  }, []);

  const heartsArray = Array.from({ length: lives }, (_, index) => (
    <span key={index} className="p-1">
      ♡
    </span>
  ));

  const handleAnswerChange = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Bitte wählen Sie eine Antwort aus.");
      return;
    }

    const correctAnswerIndex = currentQuestion.answer.findIndex(
      (a) => a.correct
    );
    const isCorrect = selectedAnswer === correctAnswerIndex;

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }

    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (questionIndex + 1 < questionsOrder.length) {
      setQuestionIndex(questionIndex + 1);
      setCurrentQuestion(questionsOrder[questionIndex + 1]);
      setSelectedAnswer(null);
      setSubmitted(false);
    } else {
      if (score > highScore) setHighScore(score);
      setEndGame(true);
    }
  };

  const resetQuiz = () => {
    const shuffledQuestions = [...questionsData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestionsOrder(shuffledQuestions);
    setQuestionIndex(0);
    setCurrentQuestion(shuffledQuestions[0]);
    setScore(0);
    setLives(5);
    setSelectedAnswer(null);
    setSubmitted(false);
    setEndGame(false);
    setPreviousScore(score);
    sessionStorage.setItem("previousScore", score.toString());
  };

  const getBackgroundColorClass = (index) => {
    if (!submitted) return "";
    const correctAnswerIndex = currentQuestion.answer.findIndex(
      (a) => a.correct
    );
    if (index === correctAnswerIndex) return "bg-correct";
    if (index === selectedAnswer && index !== correctAnswerIndex)
      return "bg-wrong";
    return "";
  };
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-between items-center w-[800px] text-second rounded-2xl mt-10 overflow-x-hidden ">
      {endGame ? (
        <QuizEndStats
          score={score}
          highScore={highScore}
          previousScore={previousScore}
          resetQuiz={resetQuiz}
          startQuiz={startQuiz}
          playerName={playerName}
        />
      ) : (
        <div className="w-full">
          <PlayerCard
            playerName={playerName}
            score={score}
            highScore={highScore}
            heartsArray={heartsArray}
          />
          <div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs">
                Kategorie:{" "}
                <a
                  href={currentQuestion.categoryUrl}
                  className="underline cursor-pointer font-bold"
                >
                  {currentQuestion.category}
                </a>{" "}
              </p>
            </div>
            <h3 className="text-4xl p-2 max-lg:text-2xl text-start">
              {questionIndex + 1}. {currentQuestion.question}
            </h3>
            <ul className="w-full p-4">
              {currentQuestion.answer.map((ans, index) => (
                <li key={index} className="flex">
                  <label
                    className={`flex items-center w-full cursor-pointer ${
                      submitted ? getBackgroundColorClass(index) : ""
                    } my-2`}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => handleAnswerChange(index)}
                      disabled={submitted}
                      className="p-10 mx-10 my-10"
                    />
                    {ans.text}
                  </label>
                </li>
              ))}
            </ul>
            {!submitted ? (
              <div className="mt-10 flex justify-around items-center">
                <Button
                  text={"Antwort einreichen"}
                  func={handleSubmit}
                  disabled={selectedAnswer === null}
                  bgColor={"bg-second"}
                  hoverBg={"hover:bg-main"}
                  hoverText={"hover:text-second"}
                  textColor={"text-bgColor"}
                />
                <Button
                  text={"Frage überspringen "}
                  func={handleNextQuestion}
                  fontW={"font-light"}
                  hoverText={"hover:font-normal"}
                />
              </div>
            ) : (
              <div className="flex justify-around items-center mt-8 p-2">
                <Button
                  text={"Quiz zurücksetzen"}
                  fontW={"font-thin"}
                  hoverText={"hover:font-light"}
                />
                <Button
                  text={"Nächste Frage"}
                  bgColor={"bg-main"}
                  hoverBg={"hover:bg-second"}
                  hoverText={"hover:text-correct"}
                  fontW={"font-bold"}
                  func={handleNextQuestion}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
