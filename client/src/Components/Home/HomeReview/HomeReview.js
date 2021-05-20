import React, { useState } from 'react';
import home1 from '../../../images/home1.jpeg';
import ItemsCarousel from 'react-items-carousel';
import HomeExperience from '../HomeExperience/HomeExperience';
import star from '../../../images/star.png';
import rightArrow from '../../../images/right-arrow.png';




const homeReview = [
    {
        image : home1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : home1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : home1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : home1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    },
    {
        image : home1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Discover the city's party scene",
        price: '$3 per person',
        rating: star
    }
]
const HomeReview = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div className='mt-5'>
            <div className="d-flex justify-content-between mt-5">
            <div><h4 className='mb-4'>Homes</h4></div>
            <div className='text-right'><a href="#">see all <img src={rightArrow} alt="" /></a></div>
            </div>
            <div>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={12}
                leftChevron={<button className='right-arrow'>{'<'}</button>}
                rightChevron={<button className='left-arrow'>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {
                    homeReview.map(review => <HomeExperience review={review}></HomeExperience>)
                }
            </ItemsCarousel>
            </div>
        </div>
    );
};

export default HomeReview;