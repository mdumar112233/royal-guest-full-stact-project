import React, { useState } from 'react';
import home1 from '../../../images/home1.jpeg';
import home2 from '../../../images/home2.jpeg';
import home3 from '../../../images/home3.jpeg';
import home4 from '../../../images/home4.jpeg';
import home5 from '../../../images/home5.jpeg';
import home6 from '../../../images/home6.jpeg';
import ItemsCarousel from 'react-items-carousel';
import HomeExperience from '../HomeExperience/HomeExperience';
import star from '../../../images/star.png';
import rightArrow from '../../../images/right-arrow.png';




const homeReview = [
    {
        image : home1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Apartment in Lost Panorama",
        price: '$3 per person',
        rating: star,
        review: 35
    },
    {
        image : home2,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Light bright airy stylish apt & safe peaceful stay",
        price: '$3 per person',
        rating: star,
        review: 42
    },
    {
        image : home3,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "AR Lounge & Pool(r&r + b&b)",
        price: '$3 per person',
        rating: star,
        review: 63
    },
    {
        image : home4,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Tree house",
        price: '$3 per person',
        rating: star,
        review: 24
    },
    {
        image : home5,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Cob cottage",
        price: '$3 per person',
        rating: star,
        review: 88
    },
    {
        image : home6,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: "Hillvilla",
        price: '$3 per person',
        rating: star,
        review: 48
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