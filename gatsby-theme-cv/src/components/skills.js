import React from 'react';
import { Card, Col, ProgressBar } from 'react-bootstrap';

const Skills = ({ skillsList }) => (
    <>
        <Card.Title>
            Skills
        </Card.Title>
        {skillsList.map(skill => (
            <Col>
                <Card.Text>
                    {skill.name}
                </Card.Text>
                <ProgressBar now={skill.rating*100} label={`${skill.rating}/${skill.maxRating}`} />
            </Col>
        ))}
    </>
)

export default Skills;