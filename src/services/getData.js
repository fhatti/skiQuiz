// /src/services/dataService.js
import { db } from './FirebaseClient';
import { ref, onValue, off } from "firebase/database";

// Define the getData function
const getData = (callback, handleError) => {
  const playersRef = ref(db, 'players'); // Use ref to get a reference to the 'players' path
  onValue(playersRef, (snapshot) => {
    callback(snapshot.val());
  }, handleError);

  // Return a function to unsubscribe the listener
  return () => off(playersRef); // Use off to remove the listener
};

// Export the getData function as the default export
export default getData;
