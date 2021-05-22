import React from 'react';
import Navbar2 from '../../Share/Navbar2';
import HouseInfo from '../HouseInfo/HouseInfo';

const NavbarAndHotelInfo = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className='row'>
                <div className="col-md-6">
                    
                </div>
                <div className="col-md-6">
                    <HouseInfo></HouseInfo>
                </div>       
            </div>
        </div>
    );
};

export default NavbarAndHotelInfo;