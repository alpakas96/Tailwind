import { getDatabase, ref, push } from "firebase/database";

async function pushToFirebase(flightNumber, database) {
  try {
    const db = getDatabase(database);
    console.log("Firebase database instance:", db);
    const usersRef = ref(db, "users/");
    console.log("Firebase database reference:", usersRef);
    await push(usersRef, {
      flightNumber,
    });
    console.log("Data written to Firebase.");
  } catch (error) {
    console.error("Error writing to Firebase:", error);
    console.log("Firebase app instance:", database());
  }
}

export { pushToFirebase };
