import React from 'react';
import Navbar2 from '../../Share/Navbar2';
import HouseInfo from '../HouseInfo/HouseInfo';
import rightArrow from '../../../images/right-arrow.png';
import men from '../../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import './SelfInfo.css';
import { useHistory, useParams } from 'react-router';



const SelfInfo = () => {
    const {id} = useParams();
    const history = useHistory();
    const handleDescription = () => {
        history.push(`/payment/${id}`)
    }
    
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <h6 className='mt-5'>1.Reviews house rules <span><img src={rightArrow} alt="" /></span> 2.Who's coming? <span><img src={rightArrow} alt="" /></span> 3.Confirm and pay</h6>
                        <div className='d-flex justify-content-between working-info'>
                            <div className=''>
                                <h4>Traveling for work?</h4>
                                <p>Say hello to your host</p>
                                <p>Let Rowdra know little about yourself and why you're coming.</p>
                            </div>
                            <div className='img-info'>
                                <img src={men} alt="" />
                                <p className='ml-2'>Rowdra</p>
                            </div>
                        </div>   
                        <textarea className='text-area' placeholder="Hello Rowdra! Can't wait to spend 4 night is your home"></textarea> <br /> <br />

                        <button onClick={handleDescription} className='continue-btn'>continue</button>
                    </div>
                    <div className="col-md-6">
                        <HouseInfo></HouseInfo>
                    </div>       
                </div>
            </div>
        </div>
    );
};

export default SelfInfo;