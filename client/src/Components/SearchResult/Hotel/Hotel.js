import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import map from '../../../images/map-img.png';
import HotelDetail from '../HotelDetail/HotelDetail';
import './Hotel.css';



const Hotel = () => {
    const [hotelInfo, setHotelInfo] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-plains-17787.herokuapp.com/hotelInfo')
        .then(res => res.json())
        .then(data => setHotelInfo(data))
    }, [])

    const locationName = sessionStorage.getItem('location');
    ;
    // const hotelLocation = useSelector((state) => {
    //     console.log(state);
    // })
    // console.log(hotelLocation);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7 mt-2">
                    <p>234 stays may 13-12 3 guests</p>
                    <h4>Stay in {locationName}</h4>
                    <div>
                        <span><button className='feature-btn'>Cancellation</button></span>
                        <span><button className='feature-btn'>Type of place</button></span>
                        <span><button className='feature-btn'>Price</button></span>
                        <span><button className='feature-btn'>Instant Book</button></span>
                        <span><button className='feature-btn'>More Filters</button></span>
                    </div>
                    {
                        hotelInfo.map(detail => <HotelDetail detail={detail}></HotelDetail>)
                    }
                </div>
                <div className="col-md-5 map-image">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hotel;