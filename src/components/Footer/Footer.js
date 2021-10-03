import React from 'react';
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mb-0 py-3">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <p className="text-white mt-4">@copyright 2021. All Rights Reserved By Likhon.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="logo mt-4" src={logo} thumbnail />
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
                            activeClassName="selected" to="/courses">Courses</NavLink>
                    </Col>
                    <Col xs={6} md={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;