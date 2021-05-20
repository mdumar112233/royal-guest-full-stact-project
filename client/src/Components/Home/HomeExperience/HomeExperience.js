import React from 'react';
import './HomeExperience.css';

const HomeExperience = (props) => {
    const {name, image, location, rating, price} = props.review;
    return (
        <div className='experience-container'>
            <div className='home-experience'>
                <img className='rounded' src={image} alt="" />
                <h6 className='mt-2'>{location}</h6>
                <h5>{name}</h5>
                <p className='text-secondary'>{price}</p>
                <div className='rating-section'>
                    <span><img src={rating} alt="" /></span>
                    <span><img src={rating} alt="" /></span>
                    <span><img src={rating} alt="" /></span>
                    <span><img src={rating} alt="" /></span>
                    <span><img src={rating} alt="" /></span>
                    <span className='ml-2'>43</span>
                </div>
            </div>
        </div>
    );
};

export default HomeExperience;