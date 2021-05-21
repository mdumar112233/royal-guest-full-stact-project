import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import men from '../../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import './SingleHotelInfo.css';

const SigleHotelInfo = () => {
    const {id} = useParams();
    const [hotelInfo, setHotelInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleHotel/${id}`)
        .then(res => res.json())
        .then(data => setHotelInfo(data[0]))
    }, [id])

    return (
        <div>
            <div className='d-flex'>
                <img style={{width: '100%', height: '452px'}} src={hotelInfo.banner1} alt="" />
                <img style={{width: '100%', height: '452px', objectFit: 'cover'}} src={hotelInfo.banner2} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <div className='d-flex justify-content-between title'>
                            <h4>{hotelInfo.name}</h4>
                            <div>
                            <img src={men} alt="" />
                            <p className='ml-2'>Rowdra</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigleHotelInfo;