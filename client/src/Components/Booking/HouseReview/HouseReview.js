import React from 'react';
import Navbar2 from '../../Share/Navbar2';
import HouseInfo from '../HouseInfo/HouseInfo';
import rightArrow from '../../../images/right-arrow.png';


const HouseReview = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <h6 className='mt-5'>1.Reviews house rules <span><img src={rightArrow} alt="" /></span> 2.Who's coming? <span><img src={rightArrow} alt="" /></span> 3.Confirm and pay</h6>
                        <h4>Review house rules</h4>
                        <h6>3 nights in Dhaka</h6>
                        
                    </div>
                    <div className="col-md-6">
                        <HouseInfo></HouseInfo>
                    </div>       
                </div>
            </div>
        </div>
    );
};

export default HouseReview;