import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import InitializeApp from "../firebase/Firebase.init";

const useFirebase = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");

    InitializeApp();
    const auth = getAuth();
    // const GoogleProvider = new GoogleAuthProvider();
    // form handling
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        // fire base authentication

        if (Password.length < 6) {
            setError("Password Must Be At Least 6 Character");
            return;
        } else {
            setError("");
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(Password)) {
            setError("Password Must Contain 2 Upper Case");
            return;
        } else {
            setError("");
        }
        RegisterUser(Email, Password);
    };
    // Registration
    const RegisterUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log(user);
                setError("");

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };
    return {
        handleRegistration,

        error,
        handleEmailChange,
        handlePasswordChange,
    };
};

export default useFirebase;
