import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../../../../hooks/useFirebase";
import "../Header.css";
const NavBar = () => {
    const { users, HandleLogout } = useFirebase();
    return (
        <Container fluid className="m-0 p-0">
            <Navbar
                className="shadow-sm "
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/" exact>
                        <span className="fw-bolder fs-3">
                            <span className="text-danger ">MHC</span> L
                            <span className="text-warning ">A</span>B
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold text-dark">
                            <Nav.Link as={NavLink} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/expert">
                                Our Experts
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                About Us
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {users ? (
                                <Navbar.Text className="pr-3">
                                    <span>
                                        Signed in as:
                                        {!users.displayName
                                            ? users.email
                                            : users.displayName}
                                    </span>
                                </Navbar.Text>
                            ) : (
                                ""
                            )}
                            {!users ? (
                                <Nav.Link as={NavLink} to="/login">
                                    <Button variant="outline-primary">
                                        Login
                                    </Button>
                                </Nav.Link>
                            ) : (
                                <Nav.Link
                                    as={NavLink}
                                    onClick={HandleLogout}
                                    to="/login"
                                >
                                    <Button variant="outline-danger">
                                        Logout
                                    </Button>
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavBar;
