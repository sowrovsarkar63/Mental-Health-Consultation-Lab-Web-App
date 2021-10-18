import React from "react";
import { Button, Carousel, Container, Nav, Navbar } from "react-bootstrap";
import img1 from "../../../assets/header/img1.jpg";
import img2 from "../../../assets/header/weimprovementalhealth.jpg";
import img3 from "../../../assets/header/wetakecareofkidhealth.jpg";
import "./Header.css";

const Header = () => {
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
                    <Navbar.Brand href="#home">
                        <span className="fw-bolder fs-3">
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

            {/* Hero area with img carosel  */}
            <div className="hero-area">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 "
                            src={img1}
                            alt="We Help To OverCome Depression And Anxeity"
                        />
                        <Carousel.Caption>
                            <h2 className="text-danger fw-bold">
                                We Help To OverCome Depression And Anxeity
                            </h2>
                            <p className="fs-4 text-warning">
                                Our Mental Health Consulting Lab Helps People To
                                Overcome Frome Mental And Personal Problem
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 "
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-danger fw-bold">
                                We Help To Imrpove Your Physical And Mental
                                Health
                            </h2>
                            <p className="fs-4 text-danger">
                                Our Mental Health Consulting Lab Helps People To
                                Improve Theire Mental And Physical Health.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 "
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-danger fw-bold">
                                We Take Care Of Your Kids Mental Health
                            </h2>
                            <p className="fs-4 text-danger">
                                Our Mental Health Consulting Lab Helps Kids To
                                Stay Fresh Minded Deppression Free, And Improve
                                Mental Health
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
};

export default Header;
