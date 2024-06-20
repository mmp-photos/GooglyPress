import { Col } from 'reactstrap';
import { Link } from "react-router-dom";
import BuyButton from './BuyButton';

const Book = (book) => {
    let bookNumber = book[0];
    // let title = book[1];
    let image = 'images/books/'+book[0]+'.jpg';
    // let collection = book[3];
    // let description = book[4];
    let breed = book[5];

    return (
        <Col xs="6" md="3" className="mt-5" style={{display:"flex", border:"3px", borderColor:"white"}}>
            <div className="card" key={bookNumber}>
                <Link to={`/Book/${bookNumber}`} >
                    <img src={image} alt={breed} />
                </Link>
                <h4 className="card-title">{breed}</h4>
                <BuyButton bookID={bookNumber} />
            </div>
        </Col>
    )
};

export default Book;