import { db } from "./FirebaseClient";
import { ref, onValue, off } from "firebase/database";

const getData = (callback, handleError) => {
  const playersRef = ref(db, "players");
  onValue(
    playersRef,
    (snapshot) => {
      callback(snapshot.val());
    },
    handleError
  );

  return () => off(playersRef);
};

export default getData;
