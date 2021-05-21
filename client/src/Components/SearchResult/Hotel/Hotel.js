import React, { useEffect, useState } from 'react';
import star from '../../../images/star.png';
import home1 from '../../../images/home1.jpeg';
import home2 from '../../../images/home2.jpeg';
import home3 from '../../../images/home3.jpeg';
import home4 from '../../../images/home4.jpeg';
import home5 from '../../../images/home5.jpeg';
import home6 from '../../../images/home6.jpeg';
import HotelDetail from '../HotelDetail/HotelDetail';
import map from '../../../images/map-img.png';
import './Hotel.css';

// https://i.postimg.cc/rm6Mh8n7/home2.jpg
// https://i.postimg.cc/D06hy1vK/home3.jpg
// https://i.postimg.cc/FzNm4TQZ/home4.jpg
// https://i.postimg.cc/Y91kZJT0/home5.jpg
// https://i.postimg.cc/bY9pTfQF/home6.jpg

// https://i.postimg.cc/d0rzVG6S/star.png

// https://i.postimg.cc/RVFBrpkG/banner1.jpg
// https://i.postimg.cc/m25GTNR4/banner2.jpg
// https://i.postimg.cc/7Lv82HfQ/banner3.jpg
// https://i.postimg.cc/8zfgcJP6/banner4.jpg

// const hotelInfo = [
//     {
//         id: 1,
//         image: home1,
//         name: 'Apartment in Lost Panorama',
//         capacity: '4 guest 2 bedrooms 3 beds 2 baths',
//         extra: 'Wifi Air condition kitchen',
//         cancel: 'Cancellation flexibility available',
//         rating: star,
//         price: '$92/night'
//     },
//     {
//         id: 2,
//         image: home2,
//         name: 'Light bright airy stylish apt & safe peaceful stay',
//         capacity: '4 guest 2 bedrooms 3 beds 2 baths',
//         extra: 'Wifi Air condition kitchen',
//         cancel: 'Cancellation flexibility available',
//         rating: star,
//         price: '$65/night'
//     },
//     {
//         id: 3,
//         image: home3,
//         name: 'AR Lounge & Pool(r&r + b&b)',
//         capacity: '4 guest 2 bedrooms 3 beds 2 baths',
//         extra: 'Wifi Air condition kitchen',
//         cancel: 'Cancellation flexibility available',
//         rating: star,
//         price: '$72/night'
//     },
//     {
//         id: 4,
//         image: home4,
//         name: 'Tree house',
//         capacity: '4 guest 2 bedrooms 3 beds 2 baths',
//         extra: 'Wifi Air condition kitchen',
//         cancel: 'Cancellation flexibility available',
//         rating: star,
//         price: '$50/night'
//     },
//     {
//         id: 5,
//         image: home5,
//         name: 'Cob cottage',
//         capacity: '4 guest 2 bedrooms 3 beds 2 baths',
//         extra: 'Wifi Air condition kitchen',
//         cancel: 'Cancellation flexibility available',
//         rating: star,
//         price: '$76/night'
//     },
//     {
//         id: 6,
//         image: home6,
//         name: 'Hillvilla',
//         capacity: '4 guest 2 bedrooms 3 beds 2 baths',
//         extra: 'Wifi Air condition kitchen',
//         cancel: 'Cancellation flexibility available',
//         rating: star,
//         price: '$34/night'
//     },


// ]

const Hotel = () => {
    const [hotelInfo, setHotelInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotelInfo')
        .then(res => res.json())
        .then(data => setHotelInfo(data))
    }, [])
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
                <div className="col-md-5 map-image">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hotel;