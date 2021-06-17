import React from 'react';
import Navbar2 from '../../Share/Navbar2';
import HouseInfo from '../HouseInfo/HouseInfo';
import rightArrow from '../../../images/right-arrow.png';
import './Payment.css';
import { useHistory, useParams } from 'react-router';


const Payment = () => {
    const {id} = useParams();
    const history = useHistory();
    const handlePayment = () => {
        history.push(`/checkPayment/${id}`)
    }
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <h6 className='mt-5'>1.Reviews house rules <span><img src={rightArrow} alt="" /></span> 2.Who's coming? <span><img src={rightArrow} alt="" /></span> 3.Confirm and pay</h6>
                        <h4 className='mt-4'>Payment Selection</h4>
                        <div className='payment-card'>
                            <input type="radio" name='payment'/><span className='ml-2'>Credit Card</span>
                        </div>
                        <div className='payment-card mt-3'>
                            <input type="radio" name='payment'/><span className='ml-2'>PayPal</span>
                        </div>
                        <div className='mt-3'>
                            <button onClick={handlePayment} className="payment-btn">Continue to pay</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <HouseInfo></HouseInfo>
                    </div>       
                </div>
            </div>
        </div>
    );
};

export default Payment;