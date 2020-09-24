import React from 'react';
import error404 from './error404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="notFoundImg" src={error404} alt="404 not found" />
        </div>
    );
};

export default NotFound;