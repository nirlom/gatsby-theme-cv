import React from 'react';
import { Col } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import Experience from '../components/work-experience';
import Education from '../components/education';

export const query = graphql`
    query {
        resume {
            id
            profilePic{
                childImageSharp{
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
            skills {
              maxRating
              name
              rating
            }
            social {
              link
              name
            }
            langauges {
              maxRating
              name
              rating
            }
            experience {
              company
              description
              from
              title
              to
            }
            education {
              college
              description
              from
              title
              to
            }
            about {
              description
              email
              location
              name
              phoneNumber
            }
          }        
    }
`

const EventTemplate = ({ data: { resume: { profilePic, skills, social, langauges, experience, education, about } } }) => (
    <Layout>
        <Col xs={12} md={3}>
           <Sidebar profileImage={profilePic} about={about} skills={skills} langauges={langauges} social={social} />
        </Col>
        <Col xs={12} md={9}>
            <Experience experienceList={experience} />
            <Education educationList={education} />
        </Col>
    </Layout>
)

export default EventTemplate;