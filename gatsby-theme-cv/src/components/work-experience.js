import React from  'react';
import { Card } from 'react-bootstrap';

const Experience = ({ experienceList }) => (
    <Card>
        <h2 class="mt-3 ml-3">
            <i class="fa fa-suitcase fa-fw mr-1"></i>
            Work Experience
        </h2>
        <Card.Body>
            {experienceList.map(experience => (
            <>
                <Card.Title>
                    {`${experience.title} / ${experience.company}`}
                </Card.Title>
                <h6 class="text-color">
                    <i class="fa fa-calendar fa-fw mr-2"></i>
                    {experience.from} - {experience.to === 'Current' ? <button type="button"
                    class="btn btn-primary btn-sm">{experience.to}</button> : experience.to}</h6>
                <Card.Text class="card-text text-color-black">
                    {experience.description}
                </Card.Text>
                <hr  /><br />
            </>
         ))}
        </Card.Body>
    </Card>
)

export default Experience;