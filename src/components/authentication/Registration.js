import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Registration.css";
const Registration = () => {
    const {
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        SignInWithGoogle,
    } = useAuth();

    return (
        <section className="d-flex justify-content-center">
            <div className="shadow-lg mb-5 w-50 p-5">
                <div>
                    <div className="form-container w-50 d-flex justify-content-center mt-5 ">
                        <Form onSubmit={handleRegistration}>
                            <h3 className="text-primary">Please Register</h3>
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
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
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
                            <p>{error}</p>
                            <Button
                                className="mx-0"
                                variant="primary"
                                type="submit"
                            >
                                Register
                            </Button>
                        </Form>
                    </div>
                    <Container>
                        <div className="google-signin">
                            <p>--Or--</p>
                            <Button
                                onClick={SignInWithGoogle}
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

export default Registration;
