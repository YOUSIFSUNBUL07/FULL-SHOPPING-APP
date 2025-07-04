// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmaV3_-i0KzYYEpbyAIUQpTQsVxPtukBQ",
  authDomain: "my-shopping-app-f54e5.firebaseapp.com",
  projectId: "my-shopping-app-f54e5",
  storageBucket: "my-shopping-app-f54e5.firebasestorage.app",
  messagingSenderId: "411627191977",
  appId: "1:411627191977:web:b66d51273ea5f63298f3b8",
  measurementId: "G-RXE43LYY3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
