import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" to="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="*">Host your home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="*">Host your experience</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="*">Help</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/login">Log in</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/signUp">Sign up</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;