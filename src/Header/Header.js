import React from 'react';
import './Header.css';
import { Button,Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import logoWhite from '../Images/logoWhite.png';

const Header = () => {
    return (
        <div className="container">
            <Navbar variant="dark">
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
  </Navbar>
  <img src="./Rectangle 1" alt=""/>
        </div>
    );
};

export default Header;