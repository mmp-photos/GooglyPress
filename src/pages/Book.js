import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import catalogListings from '../assets/data/CatalogListings.js';
import BuyButton from '../components/BuyButton'
import DogApi from '../components/DogApi'

const Book = () => {
    const { bookID } = useParams();
    const image = `/images/books/${bookID}.jpg`;
    const book = catalogListings.filter((bookNumber) => bookNumber[0] === bookID);
    const [bookIDFound, title, amazonId, category, description, breed, api, version, collection] = book[0];
    console.log(`The breed API number is ${bookIDFound} ${title} ${amazonId}, ${category} ${breed} ${api}`);
    return(
        <Container id="book">
            <Row>
                <Col md="6">
                    <img src={image} alt="" />
                </Col>
                <Col md="6">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <BuyButton bookID={bookID} />
                    <DogApi breed={api} requestType="image" />
                    <DogApi breed={api} requestType="info" />
                </Col>
            </Row>
        </Container>
    )
}

export default Book;