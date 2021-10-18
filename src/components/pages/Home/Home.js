import React from "react";
import { Button, Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <h1>This is home </h1>
            <Button variant="primary" size="sm">
                Large button
            </Button>
        </Container>
    );
};

export default Home;
