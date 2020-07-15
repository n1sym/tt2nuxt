import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'

const fbConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
};
if (!firebase.apps.length) {
firebase.initializeApp(fbConfig)
}

export default firebase