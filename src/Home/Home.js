import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../Header/Header';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Sajek from '../Images/Sajek.png';
import Sreemongol from '../Images/Sreemongol.png';
import Sundarban from '../Images/Sundarban.png';


const icon = <FontAwesomeIcon icon={faArrowRight} />
const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="overlay">
                    <Header></Header>
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-left">
                                    <h1 className="main-title">COX'S BAZER</h1>
                                    <p className="description">Cox's Bazar is a city, fishing port,
                                    tourism centre and district headquarters in southeastern Bangladesh.
                                It is famous mostly for its long natural sandy beach, and it ...</p>
                                    <Button href="/blog" className="inside-btn" variant="warning">Booking
                            <span className="icon">{icon}</span> </Button>
                                </div>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="card-1">
                                                <img className="img" src={Sundarban} alt="sundarban" />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="card-1">
                                                <img className="img" src={Sajek} alt="Sajek" />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="card-1">
                                                <img className="img" src={Sreemongol} alt="Sreemongol" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>
        </div>
    );
};

export default Home;