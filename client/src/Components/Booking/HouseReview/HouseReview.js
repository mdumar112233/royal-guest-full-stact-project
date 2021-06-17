import React from 'react';
import Navbar2 from '../../Share/Navbar2';
import HouseInfo from '../HouseInfo/HouseInfo';
import rightArrow from '../../../images/right-arrow.png';
import forbidden from '../../../images/forbidden.png';
import child from '../../../images/ic_child_friendly_48px.png';
import pet from '../../../images/ic_pets_48px.png';
import smoking from '../../../images/ic_smoking_rooms_48px.png';

import './HouseReview.css';
import { useHistory, useParams } from 'react-router';


const HouseReview = () => {
    const {id} = useParams();
    const history = useHistory();
    const handleBooking = () => {
        history.push(`/selfInfo/${id}`)
    }
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">

                        <h6 className='mt-5'>1.Reviews house rules <span><img src={rightArrow} alt="" /></span> 2.Who's coming? <span><img src={rightArrow} alt="" /></span> 3.Confirm and pay</h6>
                        <h3 className='mt-3 mb-4'>Review house rules</h3>

                        <h6>3 nights in Dhaka</h6>
                        <div className='set-date'>
                            <div className="d-flex justify-content-between mt-5">
                                <div className='d-flex CheckIn-CheckOut'>
                                    <div className='day-date'>
                                        <h6>MAY</h6>
                                        <h6>23</h6>
                                    </div>
                                    <div className='ml-3 mt-1'>
                                        <p className='text-secondary'>Monday check-in</p>
                                        <p className='text-secondary'>Aftr 12:00 Pm</p>
                                    </div>
                                </div>
                                <div className='d-flex CheckIn-CheckOut'>
                                    <div className='day-date'>
                                        <h6>MAY</h6>
                                        <h6>23</h6>
                                    </div>
                                    <div className='ml-3 mt-1'>
                                        <p className='text-secondary'>Monday check-in</p>
                                        <p className='text-secondary'>Aftr 12:00 Pm</p>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-5'>Self check-in with building staff</p>
                        </div>
                        <h4 className='mt-4'>Things to keep in mind</h4>
                        <div className='house-rule mt-5'>
                            <div>
                                <img src={child} alt="" /> <span className='ml-4 mt-1 text-secondary'>Suitable for Children and infants</span>
                            </div>
                            <div className='mt-4'>
                                <img src={pet} alt="" /> <span className='ml-4 mt-1 text-secondary'>Pets allowed</span>
                            </div>
                            <div className='mt-4'>
                                <img src={forbidden} alt="" /> <span className='ml-4 mt-1 text-secondary'>No parties ro events</span>
                            </div>
                            <div className='mt-4'>
                                <img src={smoking} alt="" /> <span className='ml-4 mt-1 text-secondary'>Smoking allowed</span>
                            </div>
                        </div>
                        <a href="#">Read more</a> <br /> <br />
                        
                        <button onClick={handleBooking} className='booking-btn'>Agree and continue</button>
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