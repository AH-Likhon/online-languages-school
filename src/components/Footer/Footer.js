import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mb-0 py-3">
            <Container>
                <Row>
                    <Col className="text-white mt-4" xs={6} md={4}>
                        <p>Copyright©️2021.All Rights Reserved By❤️Likhon.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <FontAwesomeIcon className="icon-size text-warning mt-3" icon={faUserGraduate} /> <small className="text-white fw-bold">Online Languages School</small>

                    </Col>
                    <Col xs={6} md={4}>
                        <NavLink className="custom-nav"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                            activeClassName="selected" to="/home">Home</NavLink><br />

                        <NavLink className="custom-nav"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                            activeClassName="selected" to="/about-us">About Us</NavLink><br />

                        <NavLink className="custom-nav"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                            activeClassName="selected" to="/courses">Courses</NavLink><br />

                        <NavLink className="custom-nav"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "goldenrod"
                            }}
                            activeClassName="selected" to="/contact-us">Contact Us</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;