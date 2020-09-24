
import React from 'react';
import Header from '../Header/Header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Col} from 'react-bootstrap'
// const icon = <FontAwesomeIcon icon={faArrowRight} />
import './Details.css';

const Details = () => {
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
                        <p className="description description-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi illum cum aperiam ipsam et numquam, saepe illo, nulla molestias alias. Iure corporis culpa voluptate saepe, porro sit earum! Velit nisi corrupti vero veritatis itaque, similique assumenda dolorem eos ullam! Fuga modi non porro voluptatem enim esse est, reprehenderit mollitia?</p>
    {/* <Button className="inside-btn" variant="warning">Booking <span className="icon">{icon}</span> </Button> */}
                    </div>
                        </Col>
                        <Col>
                        <div className="banner-right">
                    <div className="booking">
                       <form action="">
                       <p className="lableTitle">Origin</p>
                        <input className = "inputSpace"type="text" name="origin" id=""/>
                        <p className="lableTitle">Destination</p>
                        <input className = "inputSpace"type="text" name="destination" id=""/><br/>
                        <div className="timing">
                            <div className="from">
                                <p className="lableTitle">From</p>
                                <input className="date-1" type="date" id="from" name="from"></input>
                            </div>
                            <div className="to">
                                <p className="lableTitle">To</p>
                                <input className = "date-1 date-2" type="date" id="to" name="to"></input>
                            </div>
                        </div>
                        <input className="bookingBtn" type="submit" value="Start Booking"/>
                       </form>
                    </div>
                    </div>
                        </Col>
                    </Row>
                    

                    </Container>
               </div>

           </div>
        </div>
    );
};

export default Details;