import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import expert1 from "../../assets/experts/expert1.jpg";
import expert2 from "../../assets/experts/expert2.jpg";
import expert3 from "../../assets/experts/expert3.jpg";
import expert4 from "../../assets/experts/expert4.jpg";
import expert5 from "../../assets/experts/expert5.png";
import "./Experts.css";

const Experts = () => {
    return (
        <Container className="mt-3 mb-5">
            <div className="text-center mt-4 pt-4 shadow-sm mb-4 pb-4">
                <h2>
                    <span className="fw-bolder ">
                        <span className="text-danger">Our</span>
                        <span className="text-warning"> Experts</span>
                    </span>
                </h2>
            </div>

            {/* Experts section */}
            <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                <Col>
                    <Card className="text-center shadow">
                        <div className="card-img">
                            <Card.Img variant="top" src={expert1} />
                        </div>
                        <div className="decription">
                            <Card.Body>
                                <Card.Title>David Sune</Card.Title>
                                <Card.Text>
                                    Physical Fitness And Stress Relive Expert
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center shadow">
                        <div className="card-img">
                            <Card.Img variant="top" src={expert2} />
                        </div>
                        <Card.Body>
                            <Card.Title>Henry Gups</Card.Title>
                            <Card.Text>MedicaL Health Expert</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center shadow">
                        <div className="card-img">
                            <Card.Img variant="top" src={expert3} />
                        </div>
                        <Card.Body>
                            <Card.Title>Sufia Nuels</Card.Title>
                            <Card.Text>Girls Mental Phycrist</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="text-center shadow">
                        <div className="card-img">
                            <Card.Img variant="top" src={expert4} />
                        </div>
                        <Card.Body>
                            <Card.Title>Gary Sigmon</Card.Title>
                            <Card.Text>Mental Health Expert for kid</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center shadow">
                        <div className="card-img">
                            <Card.Img variant="top" src={expert5} />
                        </div>
                        <Card.Body>
                            <Card.Title>Steve Sunenja</Card.Title>
                            <Card.Text>Mental Health Expert</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Experts;
