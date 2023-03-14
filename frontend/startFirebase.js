import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from "@env";


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,  
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

const startFirebase = initializeApp(firebaseConfig);
const database = getDatabase(startFirebase);

export { startFirebase, database };

// wrap everything in a function 
// return database from the function
// run the function in app.js 
// the return of the function will be the database object 
// that object will be stored in a global state 
// use context for this 