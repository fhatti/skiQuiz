import React, { useState } from "react";
import QuizStart from "./components/QuizStart";
import Questions from "./components/Questions";

const App = () => {
  const [playerName, setPlayerName] = useState("");
  const startQuiz = (name) => {
    setPlayerName(name);
  };

  return (
    <div className=" bg-bgColor p-10 flex justify-center items-center text-center h-[100vh]  ">
      {playerName ? (
        <Questions playerName={playerName} startQuiz={startQuiz} />
      ) : (
        <QuizStart startQuiz={startQuiz} />
      )}
    </div>
  );
};

export default App;
