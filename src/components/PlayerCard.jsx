import React from "react";
import playerCardPic from "../assets/player-card.webp";
import Button from "./Button";

const PlayerCard = ({ playerName, score, highScore, heartsArray }) => {
  return (
    <div className=" bg-main w-full p-3 rounded-xl mt-0 mb-5 max-lg:h-[200px]">
      <div className="text-center mb-4">{heartsArray}</div>
      <div className="flex flex-col justify-between items-center w-full">
        <img
          src={playerCardPic}
          alt="player-card-pic"
          className="rounded-full max-w-[150px] max-lg:w-[40px]"
        />
        <h2 className="text-second text-2xl p-2 mt-2 max-lg:mt-0 max-lg:mb-2">
          {playerName}
        </h2>
        <div className="flex justify-around items-center  mb-2 max-lg:w-[300px] w-full ">
          <Button
            text={`Dein Score: ${score}`}
            bgColor={"bg-second"}
            textColor={"text-main"}
            rounded={"rounded-full"}
          />
          <Button
            text={`Highscore: ${highScore}`}
            bgColor={"bg-bgColor"}
            rounded={"rounded-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
