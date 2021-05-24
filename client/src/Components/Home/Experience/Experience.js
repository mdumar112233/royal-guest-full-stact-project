import React from 'react';
import './Experience.css';

const Experience = (props) => {
    const {name, image, location, rating, price, review} = props.review;
    return (
        <div className='experience-container'>
            <div className='experience'>
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
                    <span className='ml-2'>{review}</span>
                </div>
            </div>
        </div>
    );
};

export default Experience;