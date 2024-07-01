import React, { useState } from "react";
import QuizStart from "./components/QuizStart";
import Questions from "./components/Questions";

const App = () => {
  const [playerName, setPlayerName] = useState("");
  const startQuiz = (name) => {
    setPlayerName(name);
  };

  return (
    <section className=" bg-bgColor p-10 flex justify-center items-center  h-[95vh] text-center   ">
      {playerName ? (
        <Questions playerName={playerName} startQuiz={startQuiz} />
      ) : (
        <QuizStart startQuiz={startQuiz} />
      )}
    </section>
  );
};

export default App;
