import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const Contact = () => {
    return (
        <div className="w-50 mx-auto my-5">
            <h4>SEND A MESSAGE</h4>
            <p>Your email address will not be published. Required fields are marked.</p>
            <hr className="w-25 mx-auto" />
            <Form className="my-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Name *" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email *" required />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control type="text" placeholder="Subject *" />
                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Description *">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel><br />

                <Button className="fw-bold" variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;