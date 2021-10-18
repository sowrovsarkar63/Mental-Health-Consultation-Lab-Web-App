import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../assets/testimonials/1.jpg";
import img2 from "../../../assets/testimonials/2.jpg";
import img3 from "../../../assets/testimonials/3.jpg";
import img4 from "../../../assets/testimonials/4.jpg";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <section>
            <div className="text-center mt-4 pt-4 shadow-sm mb-4 pb-4">
                <h2>
                    <span className="fw-bolder ">
                        <span className="text-danger">Our</span>
                        <span className="text-warning"> Testimonials</span>
                    </span>
                </h2>
            </div>
            <div className="Testimonials shadow-lg">
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <div className="img-area">
                            <img
                                className="img-thumbnails"
                                src={img1}
                                alt="First slide"
                            />
                        </div>
                        <div className="testimonials-desc">
                            <h3>Stella</h3>
                            <p>
                                MHC LAB Is Awesome I've been going through very
                                depression and stressful at my young age. And I
                                tool help from them. Theire Treatment style is
                                really New And Modern.'
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-area">
                            <img
                                className="img-thumbnails"
                                src={img2}
                                alt="name"
                            />
                        </div>
                        <div className="testimonials-desc">
                            <h3>Erik John</h3>
                            <p>
                                At the young age I've faced lot of physicals
                                issue's for unhealthy body. That's why I got
                                deprressed at a time. And day day by day I was
                                falling into a rabbithole of self illness.
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-area">
                            <img
                                className="img-thumbnails"
                                src={img3}
                                alt="First slide"
                            />
                        </div>
                        <div className="testimonials-desc">
                            <h3>RJ. Rony</h3>
                            <p>
                                It was Aweosme. And very helpful. I was goign
                                through work pressure in my corporate life. MHC
                                LAB helps me to cope with that.
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-area">
                            <img
                                className="img-thumbnails"
                                src={img4}
                                alt="First slide"
                            />
                        </div>
                        <div className="testimonials-desc">
                            <h3>Jeniffer Guen</h3>
                            <p>
                                I'm 19 years old now. When I was 6 my parent's
                                admitted me MHC LAB for my mental growth.
                                Because I didn't understand basic thing as a kid
                                at that time. Thanks MHC LAB
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
