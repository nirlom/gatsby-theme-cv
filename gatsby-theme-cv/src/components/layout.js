import React from 'react';
import { Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css';

const Layout = ({ children }) => (
    <Container fluid={true}>
        <Row>
            {children}
        </Row>
    </Container>
)

export default Layout;
