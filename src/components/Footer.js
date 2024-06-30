import {
    Container,
    Row,
    Col,
  } from 'reactstrap';

const Footer = () => {
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                        <p>&copy; 2024 Googly Press</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <p>&copy; 2024 Googly Press</p>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;