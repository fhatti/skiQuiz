import React from "react";
import playerCardPic from "../assets/player-card.webp";

const PlayerCard = ({ playerName, score, highScore, heartsArray }) => {
  return (
    <div className="absolute top-10 right-10 bg-main rounded-xl p-10 ">
      <div className="text-center">{heartsArray}</div>
      <div className="flex flex-col justify-between items-center p-10">
        <img
          src={playerCardPic}
          alt="player-card-pic"
          className="rounded-full max-w-[150px]"
        />
        <h2 className="text-second p-2 mt-2">{playerName}</h2>
        <p className="bg-bgColor px-4 py-2 m-2 text-second text-xl rounded-xl">
          Highscore: {highScore}
        </p>
      </div>
      <div className="flex flex-col w-full text-xl my-0 mx-auto ">
        <div className="flex justify-around items-center">
          <p className="text-center">{score}</p>
        </div>
        <div className="flex justify-around  items-center">
          <p className="">Dein Score</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
