import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAppal7EbmP9L2S6mVa9sIouclFqcWY35I",
    authDomain: "impactlynk-31a1c.firebaseapp.com",
    projectId: "impactlynk-31a1c",
    storageBucket: "impactlynk-31a1c.appspot.com",
    messagingSenderId: "825014232289",
    appId: "1:825014232289:web:28fd2a3b72e75ec96c03a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
