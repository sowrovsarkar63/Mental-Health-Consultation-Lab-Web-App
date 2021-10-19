import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Services from "./Services";
import "./Services.css";
const DisplayServices = () => {
    // Load service and display to the ui
    const [Service, setService] = useState([]);

    useEffect(() => {
        fetch("/Services.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <>
            <Container>
                <div className="text-center mt-4 pt-4 shadow-sm mb-4 pb-4">
                    <h2>
                        <span className="fw-bolder ">
                            <span className="text-danger">Our</span>
                            <span className="text-warning"> Services</span>
                        </span>
                    </h2>
                </div>
                {/* display services */}
                <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                    {Service.map((singleService) => (
                        <Services
                            key={singleService.id}
                            service={singleService}
                        ></Services>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default DisplayServices;
