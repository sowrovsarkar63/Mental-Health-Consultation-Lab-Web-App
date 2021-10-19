import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Services = (props) => {
    //distructuring the props

    const { id, name, img, description } = props.service;
    return (
        <>
            <Col>
                <Card className="shadow card-handle">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description.slice(0, 250)}</Card.Text>
                    </Card.Body>
                    <div className="m-3 p-3 text-center">
                        <Button
                            as={NavLink}
                            to={`/details/${id}`}
                            variant="outline-warning"
                            size="lg"
                        >
                            See Details
                        </Button>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default Services;
