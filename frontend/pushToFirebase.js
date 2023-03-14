import "firebase/database";

async function pushToFirebase(flightNumber, database) {
    try {
      const app = database;
      console.log("Firebase app instance:", app);
      const ref = app.ref("users");
      console.log("Firebase database reference:", ref);
      await ref.push({
        flightNumber,
      });
      console.log("Data written to Firebase.");
    } catch (error) {
      console.error("Error writing to Firebase:", error);
      console.log("Firebase app instance:", database());
    }
  }

export { pushToFirebase };