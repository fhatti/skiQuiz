import { set, ref } from "firebase/database";
import { db } from "../services/FirebaseClient";

export default class QuestionsList {
  constructor(listOfQuestions) {
    this.QuestionsList = listOfQuestions;
  }

  writeQuestionsData() {
    set(ref(db, "questions/" + ""), this.QuestionsList)
      .then(() => {
        console.log("Questions saved");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
