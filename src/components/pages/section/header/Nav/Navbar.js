import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../Header.css";
const NavBar = () => {
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
                            <Navbar.Text className="pr-3">
                                Signed in as: <span>Sowrov Sarkar</span>
                            </Navbar.Text>
                            <Nav.Link as={NavLink} to="/login">
                                <Button variant="outline-primary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavBar;
