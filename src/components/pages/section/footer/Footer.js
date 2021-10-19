import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer-area pt-5">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div>
                            <span className="fw-bolder fs-3">
                                <span className="text-danger ">MHC</span> L
                                <span className="text-warning ">A</span>B
                            </span>
                        </div>

                        <br />
                        <p className="footer-text text-white">
                            We Are Providing Mental Health Consulting Services
                            From Kids To Old. We Have Best Expert's Certified
                            Doctore And They Are Giving WorldClass Treatment
                            Over The Year.
                        </p>
                    </Col>

                    <Col xs={12} md={6} lg={6} className="visit-page">
                        <Container>
                            {/* footer little menu */}
                            <h2 className="footer-text mt-3 ml-5">
                                Visit Page
                            </h2>
                            <ul>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/experts">Experts</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </ul>
                        </Container>
                    </Col>
                    {/* Footer text */}
                    <p className="text-center text-white mt-3">
                        <span className="fw-bolder fs-3">
                            CopyRight By
                            <span className="text-danger "> MHC</span> L
                            <span className="text-warning ">A</span>B
                        </span>
                    </p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
