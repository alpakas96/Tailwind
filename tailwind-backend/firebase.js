const admin = require('firebase-admin');

const serviceAccount = require('./tailwind-e2b0d-firebase-adminsdk-w1odc-481d55a8d1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tailwind-e2b0d.firebaseio.com',
});

const db = admin.firestore();

module.exports = { db };
