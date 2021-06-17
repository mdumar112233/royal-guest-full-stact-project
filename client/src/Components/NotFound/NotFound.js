import React from 'react';
import { Link } from 'react-router-dom'
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className='not-found-container'>
                <h2>Not Found</h2>
                <h3>404</h3>
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
