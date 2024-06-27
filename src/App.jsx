import { useState } from "react";
import Quiz from "./components/Quiz";
import Questions from "./components/Questions";

function App() {

  const [stepOne, setStepOne] = useState(false)
  const [name,setName] = useState("")
  return (
    <main className="flex justify-center items-center bg-bgColor h-[100vh]">
      {stepOne ?  <Questions name={name}/> : <Quiz setStepOne={setStepOne} setName={setName}/>}
    </main>
  );
}

export default App;
