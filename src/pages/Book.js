import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import catalogListings from '../assets/data/CatalogListings.js';
import BuyButton from '../components/BuyButton';
import DogApi from '../components/DogApi';

const Book = () => {
    const { bookID } = useParams();

    const image = `/images/books/${bookID}.jpg`;    
    const book = catalogListings.filter((bookArray) => bookArray[0] === bookID);
    // console.log(catalogListings[0])
    // console.log(`The filtered book array has ${book.length} records`);
    
    if (book.length === 0) {
        return (
            <h1>No Book found</h1>
        );
    } else {
        const [bookIDFound, collection, format, title, description, breed, breedId] = book[0];
        console.log(`The breed API number is ${bookIDFound} ${title} ${bookIDFound}, ${format}, ${collection} ${breed} ${breedId}`);
        return (
            <Container id="book">
                <Row>
                    <Col md="6" style={{textAlign: "center"}}>
                        <img src={image} alt="" />
                        {collection === "PLJ" && (
                            <BuyButton bookID={bookIDFound} />
                            )
                        }
                    </Col>
                    <Col md="6">
                        {collection === "PLJ" && (
                            <>
                                <DogApi breed={breedId} requestType="info" />
                                <DogApi breed={breedId} requestType="image" />
                            </>
                        )
                        }
                        <h2>{title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        {collection !== "PLJ" && (
                                <BuyButton bookID={bookID} />
                            )
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Book;
