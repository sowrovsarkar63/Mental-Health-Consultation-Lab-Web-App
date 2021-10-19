import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../assets/header/img1.jpg";
import img2 from "../../../assets/header/weimprovementalhealth.jpg";
import img3 from "../../../assets/header/wetakecareofkidhealth.jpg";
import "./Header.css";
import NavBar from "./Nav/Navbar";

const Header = () => {
    return (
        <>
            {/* Navbar */}
            <NavBar></NavBar>
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
        </>
    );
};

export default Header;
