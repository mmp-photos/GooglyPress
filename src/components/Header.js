import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
  } from 'reactstrap';
  import { useState } from 'react';
  
  import googlyLogoNav from '../assets/images/googly_logo_nav.png';
  
  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <Navbar light expand="md">
        <Container>
          <Row>
            <Col md="2">
              <NavbarBrand href="/" className="me-auto">
                <img style={{width: "150px"}} src={googlyLogoNav} alt="Googly Press Logo" />
              </NavbarBrand>
            </Col>
            <Col md="10">
            <NavbarToggler className="nav-button" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav style={{margin: "auto", paddingTop: "24px"}} className="ms-auto" navbar>
                  <NavItem>
                    <NavLink href="/happy-little-books">
                      <span className="double baseline-down">&#128515;</span> Happy Little Books
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/puppy-love">
                      <span className="double baseline-down">&#128021;</span> Puppy Love Journal
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/beatrix-potter">
                      <span className="double baseline-down">&#128048;</span> Beatrix Potter
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;
  