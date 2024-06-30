import { set, ref } from "firebase/database";
import { db } from "../services/FirebaseClient";

export default class Player {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }

  writeUserData() {
    set(ref(db, "players/" + this.name), {
      username: this.name,
      points: this.points,
    })
      .then(() => {
        console.log("Data saved");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
