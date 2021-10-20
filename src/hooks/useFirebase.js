import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeApp from "../firebase/Firebase.init";

const useFirebase = () => {
    const [users, setuser] = useState({});
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
    // Handle Login
    const handleLogin = (e) => {
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
        SignInWithEmail(Email, Password);
    };
    // login
    const SignInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setuser(user);
                setError("");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
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
    useEffect(() => {
        onAuthStateChanged(auth, (users) => {
            if (users) {
                setuser(users);
            } else {
                // singout
            }
        });
    }, []);
    return {
        handleRegistration,
        handleLogin,
        users,
        error,
        handleEmailChange,
        handlePasswordChange,
    };
};

export default useFirebase;
