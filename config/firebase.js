import * as myFirebase from "firebase";
import { FIREBASE_API_KEY } from "../environment";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "machine-learning-288804.firebaseapp.com",
  databaseURL: "https://machine-learning-288804.firebaseio.com",
  projectId: "machine-learning-288804",
  storageBucket: "machine-learning-288804.appspot.com",
  messagingSenderId: "493505482016",
  appId: "1:493505482016:web:7f722de63d2f875d9c9b45",
  measurementId: "G-0KWK4PPT2B",
};

myFirebase.initializeApp(firebaseConfig);

export default myFirebase;
