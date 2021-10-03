import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { trainer, title, description, price, ratings, reviews, thumb } = props.course;
    return (
        <div>
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img className="custom-img" variant="top" src={thumb} />
                        <Card.Body>
                            <Card.Title> {title} </Card.Title>
                            <Card.Text> {description} </Card.Text>
                            <Card.Title> Price: ${price}</Card.Title>
                            <Card.Title> Trainer: {trainer}</Card.Title>
                            <Button variant="secondary">About Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Course;