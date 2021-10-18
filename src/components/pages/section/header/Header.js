import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        <Container fluid className="m-0 p-0">
            <Navbar
                className="shadow-sm  bg-transparent"
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <span className="fw-bolder">
                            <span className="text-danger ">MHC</span> L
                            <span className="text-warning ">A</span>B
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold text-dark">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/experts">Our Experts</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Text className="pr-3">
                                Signed in as: <a href="#login">Sowrov Sarkar</a>
                            </Navbar.Text>
                            <Nav.Link href="#memes">
                                <Button variant="outline-primary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
