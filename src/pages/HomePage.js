import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
  } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import Eyes from '../components/Eyes';
import DogApi from '../components/DogApi'
import catalogListings from '../assets/data/CatalogListings.js';
import { default as HomePageText } from '../assets/data/HomePage.md';

const HomePage = () => {
    const [ breedInfo, setBreedInfo ] = useState({
                                                    breedId: '',
                                                    bookId: '',
                                                    breedName: ''
                                                });
    const [loading, setLoading] = useState(true);
    const [ markdownContent, setMarkdownContent ] = useState(HomePageText);
    const [ helmetTitle, setHelmetTitle ] = useState();

    useEffect(() => {
        const randomDog = catalogListings[Math.floor(Math.random()*catalogListings.length)];
        // console.log(`Random breed ID is ${randomDog}`);
        console.log(randomDog)
        setBreedInfo({...breedInfo, breedId: randomDog[6], bookId: randomDog[0], breedName: randomDog[5]});
        setLoading(false);
    }, [])

    if (loading || !breedInfo) {
        return <div>Loading...</div>;
    }

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
                                <ReactMarkdown>{markdownContent}</ReactMarkdown>
                            </Col>
                        </Row>    
                    </Container>
                </Col>
                <Col md="5">
                    <h6>Featured Dog</h6>
                    <h1>{breedInfo.breedName}</h1>
                    <DogApi breed={breedInfo.breedId} requestType="homepage" bookID={breedInfo.bookId} />
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;