import React from  'react';
import { Card } from 'react-bootstrap';

const Education = ({ educationList }) => (
    <Card>
        <h2 class="mt-3 ml-3">
            <i class="fa fa-suitcase fa-fw mr-1"></i>
            Work Experience
        </h2>
        <Card.Body>
            {educationList.map(education => (
            <>
                <Card.Title>
                {`${education.title} / ${education.college}`}
                </Card.Title>
                <h6 class="text-color">
                    <i class="fa fa-calendar fa-fw mr-2"></i>
                    {education.from} - {education.to === 'Current' ? <button type="button"
                    class="btn btn-primary btn-sm">{education.to}</button> : education.to}</h6>
                <Card.Text class="card-text text-color-black">
                    {education.description}
                </Card.Text>
                <hr  /><br />
            </>
         ))}
        </Card.Body>
    </Card>
)

export default Education;