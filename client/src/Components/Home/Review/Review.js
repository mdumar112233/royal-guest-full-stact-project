import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Experience1 from '../../../images/ex-1.jpeg';
import Experience2 from '../../../images/ex-2.jpeg';
import Experience3 from '../../../images/ex-3.jpeg';
import Experience4 from '../../../images/ex-4.jpeg';
import Experience5 from '../../../images/ex-5.jpeg';
import Experience6 from '../../../images/ex-6.jpeg';
import star from '../../../images/star.png';
import Experience from '../Experience/Experience';
import rightArrow from '../../../images/right-arrow.png';
import './Review.css';

const review = [
    {
        image : Experience1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$43 per person',
        rating: star,
        review: 74
    },
    {
        image : Experience2,
        location: 'PHOTOGRAPHY.NEW YORK',
        name: "Retro Photoshoot in NYC",
        price: '$64 per person',
        rating: star,
        review: 23
    },
    {
        image : Experience3,
        location: 'PHOTO CLASS.LOS ANGELES',
        name: "Must Have L.A. Pictures!",
        price: '$75 per person',
        rating: star,
        review: 55
    },
    {
        image : Experience4,
        location: 'GLASS BRIDGE.CHINA',
        name: "Glass Bridge",
        price: '$67 per person',
        rating: star,
        review: 26
    },
    {
        image : Experience5,
        location: 'PHOTO SHOOT.PARIS',
        name: "Photo shoot in Paris",
        price: '$24 per person',
        rating: star,
        review: 62
    },
    {
        image : Experience6,
        location: 'ENTERTAINMENT.VANCO',
        name: "Tour with an Enthusiastic Local!",
        price: '$92 per person',
        rating: star,
        review: 99
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