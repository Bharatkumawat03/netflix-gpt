// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPvk5oMfnLrQfwWJYDooL2eCqM78Lh7Cg",
  authDomain: "netflixgpt-804a9.firebaseapp.com",
  projectId: "netflixgpt-804a9",
  storageBucket: "netflixgpt-804a9.appspot.com",
  messagingSenderId: "664456283959",
  appId: "1:664456283959:web:8f4c00081fb6bb69bdbcb2",
  measurementId: "G-YGPK1CPYXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();