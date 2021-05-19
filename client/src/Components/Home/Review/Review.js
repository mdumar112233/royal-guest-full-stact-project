import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Experience1 from '../../../images/ex-1.jpeg';
import star from '../../../images/star.png';
import Experience from '../Experience/Experience';
import rightArrow from '../../../images/right-arrow.png';


const review = [
    {
        image : Experience1,
        location: 'ENTERTAINMENT - VANCOUVER',
        name: 'Tour with an Enthusiastic Local!',
        price: '$3 per person',
        rating: star
    }
]

const Review = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div>
            
            <div>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={2}
                gutter={12}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {
                    review.map(review => <Experience review={review}></Experience>)
                }
                
            </ItemsCarousel>
            </div>
            {/* <h2>IT company</h2> */}
        </div>
    );
};

export default Review;