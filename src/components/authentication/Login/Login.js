import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const {
        handleLogin,
        handleEmailChange,
        handlePasswordChange,
        error,
        users,
        SignInWithGoogle,
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || "/home";
    const handleGoogleSignIn = () => {
        SignInWithGoogle()
            .then((result) => {
                // The signed-in user info.
                // const user = result.user;
                history.push(redirectUri);

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <section className="d-flex justify-content-center mt-3">
            <div className="shadow-lg mb-5 w-50 p-5">
                <div>
                    <div className="form-container w-50 d-flex justify-content-center mt-5 ">
                        <Form onSubmit={handleLogin}>
                            <h3 className="text-primary">Please Login</h3>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    onBlur={handleEmailChange}
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    onBlur={handlePasswordChange}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                                <p className="text-danger">{error}</p>
                            </Form.Group>
                            <br />
                            <p>
                                Are You Registerd?{" "}
                                <NavLink to="/register">Create Account</NavLink>
                            </p>

                            <Button
                                className="mx-0"
                                variant="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                        </Form>
                    </div>
                    <Container>
                        <div className="google-signin">
                            <p>--Or--</p>
                            <Button
                                onClick={handleGoogleSignIn}
                                variant="primary"
                                size="sm"
                                type="submit"
                            >
                                SignIn With Google
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default Login;
