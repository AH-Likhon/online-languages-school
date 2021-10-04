import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import team1 from '../../images/team-1.jpg';
import team2 from '../../images/team-2.jpg';
import team3 from '../../images/team-3.jpg';
import team4 from '../../images/team-4.jpg';
import team5 from '../../images/team-5.jpg';
import team6 from '../../images/team-6.jpg';
import './About.css'

const AboutUS = () => {
    return (
        <div>
            <div className="my-5">
                <h3>About Us</h3>
                <p>It is a long established fact that a reade.</p>
                <hr className="w-25 mx-auto" />
            </div>

            <div className="d-flex justify-content-around">
                <div>
                    <h3>4000</h3>
                    <h6>Foreign Followers</h6>
                </div>
                <div>
                    <h3>50</h3>
                    <h6>Certified Teachers</h6>
                </div>
                <div>
                    <h3>1400</h3>
                    <h6>Students Enrolled</h6>
                </div>
                <div>
                    <h3>180</h3>
                    <h6>Complete Courses</h6>
                </div>
            </div>

            <div className="team-container">
                <h4 className="my-5">Meet Team Members</h4>

                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={team1} className="w-50 rounded-circle mx-auto my-3" />
                            <Card.Body>
                                <Card.Title>Anthony</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={team2} className="w-50 rounded-circle mx-auto my-3" />
                            <Card.Body>
                                <Card.Title>Anthony</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={team3} className="w-50 rounded-circle mx-auto my-3" />
                            <Card.Body>
                                <Card.Title>Anthony</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={team4} className="w-50 rounded-circle mx-auto my-3" />
                            <Card.Body>
                                <Card.Title>Anthony</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={team5} className="w-50 rounded-circle mx-auto my-3" />
                            <Card.Body>
                                <Card.Title>Anthony</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={team6} className="w-50 rounded-circle mx-auto my-3" />
                            <Card.Body>
                                <Card.Title>Anthony</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </div>

        </div>
    );
};

export default AboutUS;