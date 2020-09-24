import React, { useEffect, useState } from 'react';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import './RoomInformation.css';
import HotelFakeData from '../FakeData/HotelFakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const starIcon = <FontAwesomeIcon icon={faStar} />

const RoomInformation = () => {
    const [roomDetails, setRoomDetails] = useState(HotelFakeData);
  
    console.log(roomDetails);
    return (
        <div className="container">
            <HeaderTwo></HeaderTwo>
            <div className="roomHeader">
                <p>252 stays Apr 13-17 3 guests</p>
                <h3>Stay in Cox’s Bazar</h3>
            </div>
            <div className="roomInfo">
                {
                    roomDetails.map(room => <div className="roomLeftInfo">
                    <div className="roomImage">
                        <img className = "roomImageControl" src={room.img} alt={room.name}/>
                    </div>
                    <div className="roomDetails">
                        <h4>{room.name}</h4>
                        <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p>Wif Air conditioning Kitchen</p>
                        <p>Cancellation fexibility availiable</p>
                        <p><span className="starIcon">{starIcon}</span> <span className="rating">{room.rating} (20) </span> <span className="price">${room.price}/</span> <span className="night"> night</span> <span className="totalTaka">$167 total</span> </p>
                    </div>
                </div>)
                
                }
                <div className="roomRightInfo">
                    <h1>Map Heere</h1>
                </div>
            </div>
        </div>
    );
};

export default RoomInformation;