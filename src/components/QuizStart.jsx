
import React, { useState } from 'react';
import Button from './Button';


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
    <div className="flex flex-col justify-between items-center p-8 my-10 container-xl ">
      <h2 className='text-second text-4xl'>Willkommen beim Ski-Quiz!</h2>
    <div className='flex flex-col justify-between items-center '>
    <input
        type="text"
        placeholder="Name eingeben"
        value={name}
        onChange={handleChange}
        className="px-10 py-4 my-10 rounded-lg border-none "
      />
      <Button
     text={"Quiz starten"}
     bgColor={"bg-main"}
     textColor={"text-second"}
     fontW={"font-bold"}
     func={handleStart}
      />
    </div>
    </div>
  );
};

export default QuizStart;
