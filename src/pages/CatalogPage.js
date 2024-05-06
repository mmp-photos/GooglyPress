import React from 'react';
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import {
    Container,
    Row,
  } from 'reactstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import catalogListings from '../assets/data/CatalogListings.js';
import Book from '../components/Book';
import { default as puppyLoveContent } from '../assets/data/PuppyLove.md';
import { default as happyLittleContent } from '../assets/data/HappyLittleBooks.md';

const helmetContext = {};

const CatalogPage = ( {collection} ) => {
    const [ markdownContent, setMarkdownContent ] = useState();
    const [ helmetTitle, setHelmetTitle ] = useState();

    const markdownText = (collection) => {
        switch(collection) {
            case 'PLJ':
                console.log(`The content is PLJ`)
                setMarkdownContent(puppyLoveContent)
                setHelmetTitle("Puppy Love Journal")
                break
            case 'HLB':
                setMarkdownContent(happyLittleContent);
                setHelmetTitle("Happy Little Books")
                break
            default:
                setMarkdownContent(happyLittleContent);
                setHelmetTitle("Happy Little Books")
        }
    }

    useEffect(() => {
        markdownText(collection)
    });

    const filteredCatalog = catalogListings.filter(bookData => bookData[8] === collection);
    return (
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>{helmetTitle}</title>
        </Helmet>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
        <section>
            <Container>
                <Row>
                    {filteredCatalog.map((book) => Book(book))}
                </Row>
            </Container>
        </section>
        </HelmetProvider>
    )
};
export default CatalogPage;