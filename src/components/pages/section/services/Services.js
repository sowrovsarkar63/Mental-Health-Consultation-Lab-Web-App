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
        //             <Col>
        //                 <Card>
        //                     <Card.Img variant="top" src="holder.js/100px160" />
        //                     <Card.Body>
        //                         <Card.Title>Card title</Card.Title>
        //                         <Card.Text>
        //                             This is a longer card with supporting text below as
        //                             a natural lead-in to additional content. This
        //                             content is a little bit longer.
        //                         </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //             <Col>
        //                 <Card>
        //                     <Card.Img variant="top" src="holder.js/100px160" />
        //                     <Card.Body>
        //                         <Card.Title>Card title</Card.Title>
        //                         <Card.Text>
        //                             This is a longer card with supporting text below as
        //                             a natural lead-in to additional content. This
        //                             content is a little bit longer.
        //                         </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //
        //             <Col>
        //                 <Card>
        //                     <Card.Img variant="top" src="holder.js/100px160" />
        //                     <Card.Body>
        //                         <Card.Title>Card title</Card.Title>
        //                         <Card.Text>
        //                             This is a longer card with supporting text below as
        //                             a natural lead-in to additional content. This
        //                             content is a little bit longer.
        //                         </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //             <Col>
        //                 <Card>
        //                     <Card.Img variant="top" src="holder.js/100px160" />
        //                     <Card.Body>
        //                         <Card.Title>Card title</Card.Title>
        //                         <Card.Text>
        //                             This is a longer card with supporting text below as
        //                             a natural lead-in to additional content. This
        //                             content is a little bit longer.
        //                         </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //             <Col>
        //                 <Card>
        //                     <Card.Img variant="top" src="holder.js/100px160" />
        //                     <Card.Body>
        //                         <Card.Title>Card title</Card.Title>
        //                         <Card.Text>
        //                             This is a longer card with supporting text below as
        //                             a natural lead-in to additional content. This
        //                             content is a little bit longer.
        //                         </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         </Row>
    );
};

export default Services;
