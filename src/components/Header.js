import { Container, Row, Col, Modal } from 'reactstrap';
import { useState, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import googlyLogoNav from '../assets/images/googly_logo_nav.png'

const Header = () => {
    return(
        <nav>
            <Container>
                <Row>
                    <Col>
                        <a class="navbar-brand" href="#"><img src={googlyLogoNav} alt="Googly Press Logo" /></a>                    
                    </Col>
                    <Col>
                        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavBar">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="NavBar"> */}
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="happy-books.html"><span class="double baseline-down">&#128515;</span>  Happy Little Books </a></li>
                                <li class="nav-item"><a class="nav-link" href="puppy-love.html"><span class="double baseline-down">&#128021;</span> Puppy Love Journal </a></li>
                                <li class="nav-item"><a class="nav-link" href="beatrix-potter.html"><span class="double baseline-down">&#128048;</span> Beatrix Potter </a></li>
                            </ul>
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}

export default Header;