import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import rightArrow from '../../../images/right-arrow(1).png';


const HouseInfo = () => {
    const {id} = useParams();
    const [hotelInfo, setHotelInfo] = useState({});


    useEffect(() => {
        fetch(`https://aqueous-plains-17787.herokuapp.com/${id}`)
        .then(res => res.json())
        .then(data => setHotelInfo(data[0]))
    }, [id])

    return (
                <div>
                    <div className="reserve-info">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h4>{hotelInfo.name}</h4>
                                    <img className='mb-1' src={hotelInfo.rating} alt="" /><span className='ml-1'>5 (232 reviews)</span>
                                    </div>
                                <img style={{height: '100px', borderRadius: '4px'}} src={hotelInfo.image} alt="" />
                            </div>

                            
                            <h6 className='mt-3'>Dates</h6>
                            <div className='d-flex justify-content-around date-section'>
                                <h6 className='text-secondary'>2/3/2021</h6>
                                <img src={rightArrow} alt="" />
                                <h6 className='text-secondary'>3/5/2021</h6>
                            </div>
                            <p className='mt-3'>Guest</p>
                            <select name="" id="">
                                <option value="1 guest">1 guest</option>
                                <option value="2 guest">2 guest</option>
                                <option value="3 guest">3 guest</option>
                                <option value="4 guest">4 guest</option>
                            </select>
                            <div className='d-flex justify-content-between mt-3 pricing'>
                                <p>34x4 nights</p>
                                <p>$136</p>
                            </div>
                            <div className='d-flex justify-content-between pricing'>
                                <p>Clearing fee</p>
                                <p>$10</p>
                            </div>
                            <div className='d-flex justify-content-between pricing'>
                                <p>Service fee</p>
                                <p>$20</p>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <h6>Total</h6>
                                <p>$167</p>
                            </div>
                        </div>               
                </div>
    );
};

export default HouseInfo;