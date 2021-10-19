import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDescription = () => {
    let { id } = useParams();
    const [ServiceDetail, setServiceDetails] = useState([]);
    const [singleService, setsingleService] = useState({});
    useEffect(() => {
        fetch("/Services.json")
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, []);

    useEffect(() => {
        const FoundService = ServiceDetail.find(
            (demoService) => demoService.id == id
        );
        setsingleService(FoundService);
    }, [ServiceDetail]);

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
            <Row xs={12} md={12} lg={12} xl={12} className="g-4">
                <Col>
                    <Card className="text-center shadow w-60">
                        <Card.Img variant="top" src={singleService?.img} />

                        <div className="decription">
                            <Card.Body>
                                <Card.Title>{singleService?.name}</Card.Title>
                                <Card.Text>
                                    {singleService?.description}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDescription;
