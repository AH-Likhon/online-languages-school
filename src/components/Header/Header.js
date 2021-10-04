import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* <Image className="logo" src={logo} /> */}
                    <Navbar.Brand className="w-50">
                        <FontAwesomeIcon className="icon-size text-warning" icon={faUserGraduate} /> Online Languages School</Navbar.Brand>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink
                                        Link
                                        className="custom-nav"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "goldenrod"
                                        }}
                                        activeClassName="selected"
                                        to="/home">
                                        Home
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink Link
                                        className="custom-nav"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "goldenrod"
                                        }}
                                        activeClassName="selected"
                                        to="/about-us">
                                        About Us
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink Link
                                        className="custom-nav"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "goldenrod"
                                        }}
                                        activeClassName="selected"
                                        to="/courses">
                                        Courses
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link>
                                    <NavLink Link
                                        className="custom-nav"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "goldenrod"
                                        }}
                                        activeClassName="selected"
                                        to="/contact-us">
                                        Contact Us
                                    </NavLink>
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;