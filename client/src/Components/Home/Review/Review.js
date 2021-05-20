import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Experience1 from '../../../images/ex-1.jpeg';
import star from '../../../images/star.png';
import Experience from '../Experience/Experience';
import rightArrow from '../../../images/right-arrow.png';
import './Review.css';

const review = [
    {
        image : Experience1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : Experience1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : Experience1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : Experience1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : Experience1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    }
]



const Review = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div>
            <div className="d-flex justify-content-between ">
            <div><h4 className='mb-4'>Experience</h4></div>
            <div className='text-right'><a href="#">see all <img src={rightArrow} alt="" /></a></div>
            </div>
            <div>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={12}
                leftChevron={<button className='right-arrow'>{'<'}</button>}
                rightChevron={<button className='left-arrow'>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {
                    review.map(review => <Experience review={review}></Experience>)
                }
            </ItemsCarousel>
            </div>
        </div>
    );
};

export default Review;