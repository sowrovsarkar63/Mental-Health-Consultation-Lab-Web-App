import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.conf";

const InitializeApp = () => {
    return initializeApp(firebaseConfig);
};

export default InitializeApp;
