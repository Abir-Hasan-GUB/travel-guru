import React from 'react';
import './Header.css';
import { Button,Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import logoWhite from '../Images/logoWhite.png';

const Header = () => {
    return (
        <div className="container">

<Navbar expand="lg">
  <Navbar.Brand href="#home">
  <img className="logo" src={logoWhite} alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search your Destination..."className="mr-sm-2 search" />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
      <Nav.Link className="menu-item" href="/news">News</Nav.Link>
      <Nav.Link className="menu-item" href="/destination">Destination</Nav.Link>
      <Nav.Link className="menu-item" href="/blog">Blog</Nav.Link>
      <Nav.Link className="menu-item" href="/contacts">Contacts</Nav.Link>
    </Nav>
      <Button href="/contacts" className = "login" variant="warning">Sign in</Button>
  </Navbar.Collapse>
</Navbar>






            {/* <Navbar variant="dark">
    <Navbar.Brand href="#home">
        <img className="logo" src={logoWhite} alt="logo"/>
    </Navbar.Brand>
    <Form inline>
      <FormControl className="search" type="text" placeholder="Search your Destination..." className="mr-sm-2 search" />
    </Form>
    <Nav className="ml-auto">
      <Nav.Link className="menu-item" href="#home">Home</Nav.Link>
      <Nav.Link className="menu-item" href="#features">Features</Nav.Link>
      <Nav.Link className="menu-item" href="#pricing">Pricing</Nav.Link>
    </Nav>
    
      <Button className="login" variant="warning">Login</Button>
  </Navbar> */}



  <img src="./Rectangle 1" alt=""/>
        </div>
    );
};

export default Header;