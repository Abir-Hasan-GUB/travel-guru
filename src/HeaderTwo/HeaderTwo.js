import React from 'react';
import './HeaderTwo.css';
import { Navbar, Nav } from 'react-bootstrap';
import logoBlack from '../Images/logoBlack.png';
import { Link } from 'react-router-dom';

const HeaderTwo = (props) => {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Link to = "/"><img className="logoBlack" src={logoBlack} alt="logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="menu-item-second" href="/news">News</Nav.Link>
            <Nav.Link className="menu-item-second" href="/">Destination</Nav.Link>
            <Nav.Link className="menu-item-second" href="/">Blog</Nav.Link>
            <Nav.Link className="menu-item-second" href="/contact">Contact</Nav.Link>
          </Nav>
          <p className="liveUserName">{props.name}</p>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default HeaderTwo;