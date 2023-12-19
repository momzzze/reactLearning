
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBsiHoU0to7UJ8arsaPpNM1C4YKQRsvoT8",
    authDomain: "exercise-auth-redux.firebaseapp.com",
    projectId: "exercise-auth-redux",
    storageBucket: "exercise-auth-redux.appspot.com",
    messagingSenderId: "333492943959",
    appId: "1:333492943959:web:025c9fb8d2b0362b2f3712"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;