import React from "react";
import { Container } from "react-bootstrap";
import "./Experts.css";
const Experts = () => {
    return (
        <Container className="mt-3">
            <div className="text-center mt-4 pt-4 shadow-sm mb-4 pb-4">
                <h2>
                    <span className="fw-bolder ">
                        <span className="text-danger">Our</span>
                        <span className="text-warning"> Experts</span>
                    </span>
                </h2>
            </div>
        </Container>
    );
};

export default Experts;
