import { Link } from '@material-ui/core';
import React from 'react';
import './Navbar2.css';
import searchIcon from '../../images/search.png';

const Navbar2 = () => {
    return (
        <div className='header2-container'>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link class="navbar-brand" to="/" style={{color: '#05396B', fontWeight: 'bold', fontSize: '30px'}}>Royal Guest</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item search-input-section">
                            <input className='search-input text-center' type="text" value='hello'/>
                            <input className='search-input text-center' type="text" value='hello'/>
                            <input className='search-input text-center' type="text" value='hello'/>
                            <span><img src={searchIcon} alt="" /></span>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="*">Help</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Log in</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ml-2 me-4 mt-1 signUp-btn" to="/signUp">Sign up</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar2;