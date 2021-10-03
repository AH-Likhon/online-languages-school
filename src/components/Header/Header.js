import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image className="logo" src={logo} />
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;