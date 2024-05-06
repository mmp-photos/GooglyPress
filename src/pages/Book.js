import { useParams } from 'react-router-dom';
import catalogListings from '../assets/data/CatalogListings.js';

const Book = () => {
    const { bookID } = useParams();
    const image = `/images/books/${bookID}.jpg`;
    console.log(bookID);
    console.log(image);
    const book = catalogListings.filter((bookNumber) => bookNumber[0] === bookID);
    const [bookIDFound, title, amazonId, category, description] = book[0];
    console.log(title);

    return(
        <section>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{description}</p>
        </section>
    )
}

export default Book;