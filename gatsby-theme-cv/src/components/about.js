import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const About = ({ "about": { name, description, location, email, phoneNumber }}) => (
    <>
    <Card.Body>
        <Card.Title>
            {name}
        </Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroup.Item>
            {location}
        </ListGroup.Item>
        <ListGroup.Item>
            {email}
        </ListGroup.Item>
        <ListGroup.Item>
            {phoneNumber}
        </ListGroup.Item>
    </ListGroup>
    </>
)

export default About;