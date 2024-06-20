import {
    Container,
    Row,
    Col,
  } from 'reactstrap';
import Eyes from '../components/Eyes';
import DogApi from '../components/DogApi'

const HomePage = () => {
    return(
        <Container>
            <Row>
                <Col sm="12" md="7">
                    <Container>
                        <Row>
                            <Col>
                                <Eyes />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Some text here: </p>
                            </Col>
                        </Row>    
                    </Container>
                </Col>
                <Col md="5">
                    <DogApi breed="50" requestType="image" />
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;