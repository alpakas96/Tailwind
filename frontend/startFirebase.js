import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import * as dotenv from 'dotenv';
dotenv.config();

console.log("API_KEY:", process.env.REACT_APP_API_KEY);
console.log("AUTH_DOMAIN:", process.env.REACT_APP_AUTH_DOMAIN);
console.log("PROJECT_ID:", process.env.REACT_APP_PROJECT_ID);
console.log("STORAGE_BUCKET:", process.env.REACT_APP_STORAGE_BUCKET);
console.log("MESSAGING_SENDER_ID:", process.env.REACT_APP_MESSAGING_SENDER_ID);
console.log("APP_ID:", process.env.REACT_APP_APP_ID);
console.log("MEASUREMENT_ID:", process.env.REACT_APP_MEASUREMENT_ID);

export default function startFirebase() {
    const firebaseConfig = {
        // apiKey: API_KEY,
        // authDomain: AUTH_DOMAIN,
        // projectId: PROJECT_ID,  
        // storageBucket: STORAGE_BUCKET,
        // messagingSenderId: MESSAGING_SENDER_ID,
        // appId: APP_ID,
        // measurementId: MEASUREMENT_ID
        
    };
    const database = getDatabase(initializeApp(firebaseConfig));
    return database;
}