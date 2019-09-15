import React from 'react';
import Img from 'gatsby-image';

const ProfilePic = ({ profileImage, name }) => (<Img className="card-img-top" fluid={profileImage.childImageSharp.fluid} alt={name} />)


export default ProfilePic;