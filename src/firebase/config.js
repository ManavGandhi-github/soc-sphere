import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // your firebase config here
  apiKey: "AIzaSyDlwib0C4QukHr2gcQS1o3oFVkdktJc6Vk",
  authDomain: "ig-clone-cefdc.firebaseapp.com",
  projectId: "ig-clone-cefdc",
  storageBucket: "ig-clone-cefdc.appspot.com",
  messagingSenderId: "736638316831",
  appId: "1:736638316831:web:40cb54c49437029215402a",
  measurementId: "G-EY6LG8DKL4",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { firestore, auth, storage, analytics };
