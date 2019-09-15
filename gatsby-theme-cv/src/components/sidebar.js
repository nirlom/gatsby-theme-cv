import React from 'react';
import { Card } from 'react-bootstrap';
import ProfilePic from './profile-pic';
import About from './about';
import Skills from './skills';
import Social from './social';
import Langauges from './langauge';

const Sidebar = ({ profileImage, about, skills, langauges, social }) => (
    <Card>
        <ProfilePic profileImage={profileImage} name={about.name} />
        <About about={about} />
        <Card.Body>
            <Skills skillsList={skills} />
            <br />
            <hr />
            <Langauges langaugesList={langauges} />
            <br />
            <hr />
            <Social socialList={social} />
        </Card.Body>
    </Card>
);

export default Sidebar;