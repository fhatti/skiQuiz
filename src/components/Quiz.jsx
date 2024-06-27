import React, { useState } from "react";

const Quiz = (props) => {
  const [nameValue, setNameValue] = useState("");
  const handleNameInput = (event) => {
    setNameValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setName(nameValue);
    props.setStepOne(true);
  };
  return (
    <form
      action="
    "
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <label htmlFor="">Quiz</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Geben Sie Ihren Namen ein"
        value={nameValue}
        onChange={handleNameInput}
        required
        className="py-4 px-20"
      />
      <button type="submit" className="bg-bgColor">Absenden</button>
    </form>
  );
};

export default Quiz;
