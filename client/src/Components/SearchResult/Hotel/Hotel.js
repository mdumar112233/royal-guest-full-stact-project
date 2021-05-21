import React from 'react';
import star from '../../../images/star.png';
import home1 from '../../../images/home1.jpeg';
import home2 from '../../../images/home2.jpeg';
import home3 from '../../../images/home3.jpeg';
import home4 from '../../../images/home4.jpeg';
import home5 from '../../../images/home5.jpeg';
import home6 from '../../../images/home6.jpeg';
import HotelDetail from '../HotelDetail/HotelDetail';
import './Hotel.css';


const hotelInfo = [
    {
        image: home1,
        name: 'Apartment in Lost Panorama',
        capacity: '4 guest 2 bedrooms 3 beds 2 baths',
        extra: 'Wifi Air condition kitchen',
        cancel: 'Cancellation flexibility available',
        rating: star,
        price: '$92/night'
    },
    {
        image: home2,
        name: 'Light bright airy stylish apt & safe peaceful stay',
        capacity: '4 guest 2 bedrooms 3 beds 2 baths',
        extra: 'Wifi Air condition kitchen',
        cancel: 'Cancellation flexibility available',
        rating: star,
        price: '$65/night'
    },
    {
        image: home3,
        name: 'AR Lounge & Pool(r&r + b&b)',
        capacity: '4 guest 2 bedrooms 3 beds 2 baths',
        extra: 'Wifi Air condition kitchen',
        cancel: 'Cancellation flexibility available',
        rating: star,
        price: '$72/night'
    },
    {
        image: home4,
        name: 'Tree house',
        capacity: '4 guest 2 bedrooms 3 beds 2 baths',
        extra: 'Wifi Air condition kitchen',
        cancel: 'Cancellation flexibility available',
        rating: star,
        price: '$50/night'
    },
    {
        image: home5,
        name: 'Cob cottage',
        capacity: '4 guest 2 bedrooms 3 beds 2 baths',
        extra: 'Wifi Air condition kitchen',
        cancel: 'Cancellation flexibility available',
        rating: star,
        price: '$76/night'
    },
    {
        image: home6,
        name: 'Hillvilla',
        capacity: '4 guest 2 bedrooms 3 beds 2 baths',
        extra: 'Wifi Air condition kitchen',
        cancel: 'Cancellation flexibility available',
        rating: star,
        price: '$34/night'
    },


]

const Hotel = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7 mt-2">
                    <p>234 stays may 13-12 3 guests</p>
                    <h4>Stay in Dhaka Division</h4>
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
                <div className="col-md-5">
                        
                </div>
            </div>
        </div>
    );
};

export default Hotel;