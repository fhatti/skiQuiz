import React, { useState, useEffect } from "react";
import Button from "./Button";
import Player from "../models/Player";
import Leaderboard from "../components/Leaderboard";

const QuizEnd = ({
  playerName,
  score,
  highScore,
  previousScore,
  resetQuiz,
  startQuiz,
}) => {
  const getEndMessage = () => {
    switch (score) {
      case 10:
        return "Du scheinst ein richtiger Experte zu sein! Schaffst du das auch ein zweites Mal?";
      case 9:
        return "Das war knapp! Schaffst du beim nächsten Mal die volle Punktzahl?";
      case 8:
        return "Sehr gut! Du bist fast perfekt!";
      case 7:
        return "Gut gemacht! Noch ein bisschen mehr und du bist ein Experte!";
      case 6:
        return "Nicht schlecht! Du hast über die Hälfte richtig!";
      case 5:
        return "Du hast es zur Hälfte geschafft! Versuch es nochmal!";
      case 4:
        return "Guter Versuch! Vielleicht kannst du dich beim nächsten Mal verbessern.";
      case 3:
        return "Nicht aufgeben! Übung macht den Meister!";
      case 2:
        return "Das war nicht einfach, aber versuche es weiter!";
      case 1:
        return "Ein Anfang ist gemacht! Du kannst nur besser werden!";
      case 0:
        return "Mach dir nichts draus! Jeder hat mal klein angefangen!";
      default:
        return "Ungültige Punktzahl!";
    }
  };

  const getPreviousScoreMessage = () => {
    if (previousScore === null) return "";

    if (score > previousScore) {
      return "Gratulation! Du hast dich verbessert!";
    } else if (score < previousScore) {
      return "Schade! Diesmal lief es nicht so gut.";
    } else {
      return "Du hast die gleiche Punktzahl wie beim letzten Mal.";
    }
  };
  useEffect(() => {
    if (playerName) {
      const newPlayer = new Player(playerName, highScore);
      newPlayer.writeUserData();
    }
  }, [playerName]);

  return (
    <section className="flex flex-col">
      <div className="flex flex-col p-2 justify-between items-center">
        <h2 className="text-4xl font-bold">Quiz beendet!</h2>
        <p className="p-2">{getPreviousScoreMessage()}</p>
        <p className="text-xl mt-4 mb-2">
          Sie haben <span className="text-main">{score}</span> / 10 korrekt
          beantwortet
        </p>
      </div>
      <div>
        <div>
          <Leaderboard />
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-l w-[80%] m-10 ">{getEndMessage()}</p>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <Button
          func={resetQuiz}
          text={"Quiz erneut starten"}
          bgColor={"bg-second"}
          textColor={"text-bgColor"}
          hoverBg={"hover:bg-main"}
          hoverText={"hover:text-second"}
        />
        <Button
          func={() => startQuiz("")}
          text={"Zum Start zurückkehren"}
          hoverText={"hover:font-thin"}
        />
      </div>
    </section>
  );
};

export default QuizEnd;
