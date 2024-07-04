import {
    Container,
    Row,
    Col,
  } from 'reactstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center" md="2">
                        <Link to={`https://www.amazon.com/stores/author/B09ZB4NY37/allbooks?ingress=0&visitId=37944add-4904-4289-b541-3fc676a76d1d&ref_=sr_ntt_srch_lnk_1`} target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-amazon xl-font"></i>
                        </Link>
                    </Col>
                    <Col className="text-center">
                        <p>&copy; 2024 Googly Press</p>
                    </Col>
                    <Col className="text-center" md="2">
                        <Link to={`mailto:dmayer1@gmail.com`}>
                            <i class="fa-regular fa-envelope xl-font"></i>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;