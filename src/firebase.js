import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7RsvoJ89vTPrRHlPEtOd0iaKNUHm4dhA",
    authDomain: "gyldendalapp-98e38.firebaseapp.com",
    projectId: "gyldendalapp-98e38",
    storageBucket: "gyldendalapp-98e38.firebasestorage.app",
    messagingSenderId: "537467301318",
    appId: "1:537467301318:web:c8b078a28d556dcef056c7",
    measurementId: "G-D24PWVXPQG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence); // ✅ explicitly set to localStorage

export { auth };