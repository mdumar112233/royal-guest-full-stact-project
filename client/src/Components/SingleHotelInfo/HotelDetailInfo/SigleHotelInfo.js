import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import men from '../../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import checkMark from '../../../images/checkmark-square-2.png';
import solid from '../../../images/solid.png';
import single from '../../../images/single-01.png';
import home from '../../../images/home.png';
import rightArrow from '../../../images/right-arrow(1).png';
import './SingleHotelInfo.css';
import { useHistory } from 'react-router';

const SigleHotelInfo = () => {
    const {id} = useParams();
    const [hotelInfo, setHotelInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleHotel/${id}`)
        .then(res => res.json())
        .then(data => setHotelInfo(data[0]))
    }, [id])

    const history = useHistory();
    const handleReserve = () => {
        const url = `/booking/${id}`;
        history.push(url);
    }

    return (
        <div>
            <div className='d-flex'>
                <img style={{width: '100%', height: '452px'}} src={hotelInfo.banner1} alt="" />
                <img style={{width: '100%', height: '452px', objectFit: 'cover'}} src={hotelInfo.banner2} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="room-info">
                            <div className='d-flex justify-content-between title'>
                                <h3>{hotelInfo.name}</h3>
                                <div>
                                <img src={men} alt="" />
                                <p className='ml-2'>Rowdra</p>
                                </div>
                            </div>
                            <p className='text-secondary'>Dhaka, Bangladesh</p>
                            <p className='text-secondary'>4 guest 2 bedrooms 2 beds 2 baths</p>
                        </div>
                        <div className="room-feature">
                            <div className="d-flex">
                            <img src={home} alt="" />
                            <div>
                            <p className='text-secondary font-weight-bold'>Entire home</p>
                            <p className='text-secondary'>You'll have the condominium to yourself</p>
                            </div>
                            </div>

                            <div className="d-flex mt-4">
                            <img src={checkMark} alt="" />
                            <div>
                            <p className='text-secondary font-weight-bold'>Self check-in</p>
                            <p className='text-secondary'>You can check in with the doorman</p>
                            </div>
                            </div>

                            <div className="d-flex mt-4">
                            <img src={solid} alt="" />
                            <div>
                            <p className='text-secondary font-weight-bold'>Sparkling clear</p>
                            <p className='text-secondary'>10 recent guests said this place was sparking clear</p>
                            </div>
                            </div>

                            <div className="d-flex mt-4 mb-4">
                            <img src={single} alt="" />
                            <div>
                            <p className='text-secondary font-weight-bold'>Rowdra is  a superhost</p>
                            <p className='text-secondary'>Superhosts are experience, highly rated hosts who are committed to providing great stays for guest.</p>
                            </div>
                            </div>
                        </div>

                        <div className="room-description mt-4">
                            <p className='text-secondary'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi molestiae temporibus soluta optio harum distinctio doloremque ullam possimus sunt omnis, fugiat doloribus cumque, ex, in vel molestias voluptates. Aliquid voluptatem debitis fuga laborum quibusdam eos architecto, esse assumenda animi accusamus nesciunt sed aut! Ut sapiente iste non velit officia possimus neque autem fugiat nulla, illum aperiam impedit suscipit asperiores quo omnis architecto minima consequuntur error molestias? Sint provident atque fuga ullam id maxime, iure eum reprehenderit, quibusdam, porro modi nihil commodi accusamus saepe reiciendis eaque ad obcaecati quam consequuntur. Molestiae saepe dolorem eum accusantium amet? Minima sapiente omnis dolor expedita. <br />
                                <a href="#">Read more</a>
                            </p>
                        </div>

                        <div className="room-review mb-5">
                            <h6 className='font-weight-bold'>Reviews</h6>
                            <img src={hotelInfo.rating} alt="" />
                            <span>5 (232)</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="reserve-info">
                            <h4>$34/<span style={{fontWeight: '300'}}>Night</span></h4>
                            <img className='mb-1' src={hotelInfo.rating} alt="" />
                            <span className='ml-1'>5 (232 reviews)</span>
                            <h6 className='mt-3'>Dates</h6>
                            <div className='d-flex justify-content-around date-section'>
                                <h6 className='text-secondary'>2/3/2021</h6>
                                <img src={rightArrow} alt="" />
                                <h6 className='text-secondary'>3/5/2021</h6>
                            </div>
                            <p className='mt-3'>Guest</p>
                            <select name="" id="">
                                <option value="2 guest">2 guest</option>
                                <option value="3 guest">3 guest</option>
                                <option value="4 guest">4 guest</option>
                            </select>
                            <div className='d-flex justify-content-between mt-3 pricing'>
                                <p>34x4 nights</p>
                                <p>$136</p>
                            </div>
                            <div className='d-flex justify-content-between pricing'>
                                <p>Clearing fee</p>
                                <p>$10</p>
                            </div>
                            <div className='d-flex justify-content-between pricing'>
                                <p>Service fee</p>
                                <p>$20</p>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <h6>Total</h6>
                                <p>$167</p>
                            </div>
                            <button onClick={handleReserve}  className='reserve-btn'>Reserve</button>
                            <p className='text-center mt-3'>you won't charged</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigleHotelInfo;