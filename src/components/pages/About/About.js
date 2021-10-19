import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/about/about1.jpg";
import img2 from "../../assets/about/about2.jpg";
import "./About.css";
const About = () => {
    return (
        <div className="about-page">
            <Container>
                <div className="jumbotron">
                    <h1 className="display-4">About Us</h1>
                    <p className="lead">
                        Mentals Health Consulting Lab Mainly Provide Lifestyle,
                        Personal , Physical And Mental TreatMent. We Have Some
                        Extra Ordinary Doctor's And Researcher Base on
                        Phychologies,Health,Autisom , Physical Disorder and Many
                        More. We Have So Many Experts Who Have Done His PHD In
                        Mental Health, Life Balance And Work Balance.
                    </p>
                    <hr className="my-4" />
                    <p>
                        We Are Focusing Both Kids and Older People To Overcome
                        Mental Illness, Depression, Anxiety, Lonelyness And{" "}
                        <br />
                        Pressure Handlign. We Help Kids for menatls growth.
                    </p>

                    <p>
                        Depression and anxiety disorders are different, but
                        people with depression often experience symptoms similar{" "}
                        <br />
                        to those of an anxiety disorder, such as nervousness,
                        irritability, and problems sleeping and concentrating.
                    </p>
                </div>

                <Row>
                    <h2 className="text-danger">Here We Are</h2>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className="about-gallary">
                            <img src={img1} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className="about-gallary">
                            <img src={img2} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
