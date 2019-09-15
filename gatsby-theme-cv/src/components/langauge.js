import React from 'react';
import { Card, Col, ProgressBar,  } from 'react-bootstrap';

const Langauges = ({ langaugesList }) => (
    <>
        <Card.Title>
            Langauges
        </Card.Title>
        {langaugesList.map(langauge => (
            <Col>
                <Card.Text>
                    {langauge.name}
                </Card.Text>
                <ProgressBar now={langauge.rating*100} label={`${langauge.rating}/${langauge.maxRating}`} />
            </Col>
        ))}
    </>
)

export default Langauges;