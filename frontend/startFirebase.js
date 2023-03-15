import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Add this line
import appConfig from './app.json';

const firebaseConfig = appConfig.expo.extra.firebaseConfig;

const startFirebase = initializeApp(firebaseConfig);

export const database = getDatabase(startFirebase); // Export the database instance
export default startFirebase;
