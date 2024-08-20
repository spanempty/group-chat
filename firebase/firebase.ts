import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWx4xwhDC7ZOUu-N5ZblD85LS2Z2g5Evs",
  authDomain: "adventers-ad0d0.firebaseapp.com",
  projectId: "adventers-ad0d0",
  storageBucket: "adventers-ad0d0.appspot.com",
  messagingSenderId: "708498468588",
  appId: "1:708498468588:web:42a951081e293802a5bfc9",
  measurementId: "G-WHXDCBZM8S",
  databaseURL: "https://adventers-ad0d0-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
