import React, { useState } from "react";
import Button from "./Button";
import Leaderboard from "./Leaderboard";

const QuizStart = ({ startQuiz }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleStart = () => {
    if (name.trim()) {
      startQuiz(name);
    } else {
      alert("Bitte geben Sie einen Namen ein.");
    }
  };

  return (
    <section className="max-container flex-col justify-between items-center max-lg:flex-col gap-20">
     <div className="flex  justify-around items-center max-lg:flex-col gap-20">
     <h1 className="text-3xl leading-[70px] lg:max-w-md font-bold text-second">
        Willkommen beim <span className="text-main text-4xl font-bold">Ski-Quiz!</span>
      </h1>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-2 sm:border-second rounded-full">
        <input
          type="text"
          placeholder="Name eingeben"
          value={name}
          onChange={handleChange}
          className="input bg-bgColor text-main "
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Start Quiz"
            func={handleStart}
            bgColor={"bg-main"}
            textColor={"text-second"}
            text={"Quiz starten"}
            rounded={"rounded-full"}
          />
        </div>
      </div>
     </div>
     <div className="mt-10">
     <Leaderboard/>
     </div>
    </section>
  );
};

export default QuizStart;
