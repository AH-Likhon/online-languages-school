import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamMembers = (props) => {
    const { trainer, trainerImg } = props.course;
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" src={trainerImg} className="w-50 rounded-circle mx-auto my-3" />
                    <Card.Body>
                        <Card.Title>{trainer}</Card.Title>
                        <Card.Text>
                            <Link className="text-secondary me-2 fs-5" href="#"> <i class="fab fa-facebook"></i></Link>
                            <Link className="text-secondary me-2 fs-5" href="#"><i class="fab fa-twitter"></i></Link>
                            <Link className="text-secondary me-2 fs-5" href="#"><i class="fab fa-linkedin-in"></i></Link>
                            <Link className="text-secondary me-2 fs-5"><i class="fab fa-youtube"></i></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default TeamMembers;