import React from 'react';
import { useHistory } from 'react-router';
import './HotelDetail.css';

const HotelDetail = (props) => {
    const {id,image, name, capacity, extra, cancel, rating, price} = props.detail;

    const history = useHistory();
    const handleHotelInfo = () => {
        const url = `/singleHotel/${id}`;
        history.push(url)
    }
    return (
        <div onClick={handleHotelInfo} className='d-flex detail-container mt-4'>
            <div className='hotel-image'>
                <img src={image} alt="" />
            </div>
            <div className="hotel-info ml-4" style={{width:'342px'}}>
                <h6 style={{color: '#05396B'}}>{name}</h6>
                <p>{capacity}</p>
                <p>{extra}</p>
                <p>{cancel}</p>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src={rating} alt="" />
                        <span className='ml-1'>5 (232)</span>
                    </div>
                    <div>
                        <h5 className='price'>${price}/Night</h5>
                        <h6 className='total'>173 total</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;