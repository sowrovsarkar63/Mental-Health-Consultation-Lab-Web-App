import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.conf";

const InitializeApp = () => {
     initializeApp(firebaseConfig);
};

export default InitializeApp;
