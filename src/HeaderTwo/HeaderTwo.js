import React from 'react';
import './HeaderTwo.css';
import { Button,Navbar,Nav,Form } from 'react-bootstrap';
import logoBlack from '../Images/logoBlack.png';
const HeaderTwo = () => {
    return (
        <div className="container">
            <Navbar expand="lg">
  <Navbar.Brand href="#home">
      <img className="logoBlack" src={logoBlack} alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="menu-item-second" href="/news">News</Nav.Link>
      <Nav.Link className="menu-item-second" href="/destination">Destination</Nav.Link>
      <Nav.Link className="menu-item-second" href="/blog">Blog</Nav.Link>
      <Nav.Link className="menu-item-second" href="/contacts">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <Button href="/contacts" className="login" variant="warning">Login</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>




        </div>
    );
};

export default HeaderTwo;