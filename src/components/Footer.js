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
                    <Col className="text-center" md="2">
                        <i class="fa-brands fa-amazon xl-font"></i>
                    </Col>
                    <Col className="text-center">
                        <p>&copy; 2024 Googly Press</p>
                    </Col>
                    <Col className="text-center" md="2">
                        <i class="fa-regular fa-envelope xl-font"></i>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;