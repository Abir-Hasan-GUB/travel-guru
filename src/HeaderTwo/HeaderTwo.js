import React from 'react';
import './HeaderTwo.css';
import { Navbar, Nav } from 'react-bootstrap';
import logoBlack from '../Images/logoBlack.png';

const HeaderTwo = (props) => {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img className="logoBlack" src={logoBlack} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="menu-item-second" href="/news">News</Nav.Link>
            <Nav.Link className="menu-item-second" href="/destination">Destination</Nav.Link>
            <Nav.Link className="menu-item-second" href="/blog">Blog</Nav.Link>
            <Nav.Link className="menu-item-second" href="/contacts">Contact</Nav.Link>
          </Nav>
          <p className="liveUserName">{props.name}</p>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default HeaderTwo;