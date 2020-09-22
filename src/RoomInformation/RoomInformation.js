import React from 'react';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import './RoomInformation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const starIcon = <FontAwesomeIcon icon={faStar} />
const RoomInformation = () => {
    return (
        <div className="container">
            <HeaderTwo></HeaderTwo>
            <div className="roomHeader">
                <p>252 stays Apr 13-17 3 guests</p>
                <h3>Stay in Cox’s Bazar</h3>
            </div>
            <div className="roomInfo">
                <div className="roomLeftInfo">
                    <div className="roomImage"></div>
                    <div className="roomDetails">
                        <h4>Light bright airy stylish apt & safe 
peaceful stay</h4>
<p>4 guests   2 bedrooms   2 beds   2 baths</p>
<p>Wif Air conditioning Kitchen</p>
<p>Cancellation fexibility availiable</p>
    <p><span className = "icon">{starIcon}</span> <span className = "rating">4.9 (20) </span> <span className = "price">$34/</span> <span className = "night"> night</span> <span className = "totalTaka">$167 total</span> </p> 
                    </div>
                </div>
                <div className="roomRightInfo">
                    <h1>Map Heere</h1>
                </div>
            </div>
        </div>
    );
};

export default RoomInformation;