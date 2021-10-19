import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
    return (
        <section className="mb-5">
            <div className="text-center mt-4 pt-4 shadow-sm mb-4 pb-4">
                <h2>
                    <span className="fw-bolder ">
                        <span className="text-danger">Contact</span>
                        <span className="text-warning"> With Us</span>
                    </span>
                </h2>
            </div>
            <div className="d-flex justify-content-center  ">
                <Form className="forms shadow-lg p-4 ">
                    <Form.Label>Enter Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Mail" />

                    <Form.Label>Write Your Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Write Message here"
                        rows={3}
                    />
                    <Button
                        variant="primary"
                        size="lg"
                        className="mt-3 text-right"
                    >
                        Contact
                    </Button>
                </Form>
            </div>
        </section>
    );
};

export default Contact;
