import { database } from "./frontend/startFirebase";

// Write data to the database with a new unique key
export const pushToFirebase = (deviceToken, flightNumber) => {
    database.ref('users').push({
        deviceToken: deviceToken,
        flightNumber: flightNumber
    })
};