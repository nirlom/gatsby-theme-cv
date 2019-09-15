import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css';

const Layout = ({ children, metaInfo }) => (
    <>
    <Helmet
        title={metaInfo.title}
        meta={[
            { name: 'description', content: metaInfo.description },
        ]}
        link={[
            {
            rel: 'icon', type: 'image/png', sizes: '32x32', href: metaInfo.favicon,
            },
            { rel: 'canonical', href: metaInfo.website },
        ]}
    >
    </Helmet>
    <Container fluid={true}>
        <Row>
            {children}
        </Row>
    </Container>
    </>
)

export default Layout;
