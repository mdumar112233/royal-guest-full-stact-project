import { Link } from '@material-ui/core';
import React from 'react';
import './Navbar2.css';
import searchIcon from '../../images/search.png';
import { useHistory } from 'react-router';

const Navbar2 = () => {
    const history = useHistory();
    const handleLogo = () => {
        history.push('/');
    }

    const login = useHistory();
    const handleLogin = () => {
        login.push('/login');
    }

    const singUp = useHistory();
    const handleSignUp = () => {
        singUp.push('/createAccount');
    }
    

    const checkIn = sessionStorage.getItem('checkIn');
    const checkOut = sessionStorage.getItem('checkOut');

    const checkInDate = new Date(checkIn);
    const checkInDay = checkInDate.getDate();
    const checkInMonth = checkInDate.getMonth();
    // console.log(monthAndDate)

    const checkOutDate = new Date(checkOut);
    const checkOutDay = checkOutDate.getDate();
    const checkOutMonth = checkOutDate.getMonth();


    return (
        <div className='header-container'>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link onClick={handleLogo} class="navbar-brand" to="/" style={{color: '#05396B', fontWeight: 'bold', fontSize: '30px', cursor: 'pointer'}}>Royal Guest</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item search-input-section">
                            <input className='search-input text-center font-weight-bold' type="text" value={sessionStorage.getItem('location')}/>
                            <input className='search-input text-center font-weight-bold' type="text" value={`${checkInMonth}/${checkInDay} - ${checkOutMonth}/${checkOutDay}`}/>
                            <input className='search-input text-center font-weight-bold' type="text" value='1 Guest'/>
                            <span className='p-3'><img src={searchIcon} alt="" /></span>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="*">Help</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" onClick={handleLogin} to="/login">Log in</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ml-2 me-4 mt-1 signUp-btn" onClick={handleSignUp} to="/createAccount">Sign up</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar2;