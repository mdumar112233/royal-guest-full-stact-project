import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import downArrow from '../../../images/down-arrow.png';
import upArrow from '../../../images/upload.png';
import search from '../../../images/loupe.png';
import rightArrow from '../../../images/right-arrow.png';
import './SearchSection.css';
import Review from '../Review/Review';
import HomeReview from '../HomeReview/HomeReview';

const SearchAndReview = () => {
    
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });
    console.log(selectedDate)

    const handleCheckInDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };
    const handleCheckOutDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4  search-section">
                    <h5 className='mt-5 mb-4'>Where do you want to go</h5>
                    <div className="location-bar mt-3 mb-3">
                        <h6>LOCATION</h6>
                        <input className='search-input' type="text" placeholder='Add city, Landmark, or address'/>
                    </div>
                    <div className="set-date mb-3" style={{width: '350px'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <div className='checkIn-date' style={{width: '175px'}}>
                                <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Arrival"
                                value={selectedDate.checkIn}
                                onChange={handleCheckInDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </div>
                            <div className='checkOut-date' style={{width: '175px', textAlign: 'left'}}>
                                <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Departure"
                                format="MM/dd/yyyy"
                                value={selectedDate.checkOut}
                                onChange={handleCheckOutDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </div>
                        </Grid>
                    </MuiPickersUtilsProvider>
                    </div>
                    <div className="select-guest">
                    <div class="accordion" id="accordionExample">
                        <div class="card border-0">
                            <div class="card-header border-0" id="headingOne" style={{height: '100px',background: '#fff'}}>
                            <h2 class="mb-0">
                                <button class="btn  btn-block text-left " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <p className='text-secondary' style={{marginLeft: '-15px'}}>Guest</p>
                                <div className="dropdown-btn d-flex justify-content-between">
                                    <div className="guest-count">
                                    <p style={{width: '150px'}}>1 ADULTS, 1 CHILD</p>
                                    </div>
                                    <div className="dropdown-arrow">
                                        <img src={downArrow} alt="" />
                                    </div>
                                </div>
                                </button>
                            </h2>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <div className="adult-member d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 >ADULTS</h6>
                                    </div>
                                    <div className='minus-plus-count d-flex'>
                                        <button className='minus-btn'>-</button>
                                        <input className='input-align ml-4' type="text" value='1' />
                                        <button className='plus-btn ml-4'>+</button>
                                    </div>
                                </div>
                                <div className="child-member d-flex justify-content-between mt-3 mb-3">
                                    <div>
                                        <h6>CHILD</h6>
                                        <p className='text-secondary'>Age 2-12</p>
                                    </div>
                                    <div className='minus-plus-count d-flex'>
                                        <button className='minus-btn'>-</button>
                                        <input className='input-align ml-4' type="text" value='1' />
                                        <button className='plus-btn ml-4'>+</button>
                                    </div>
                                </div>
                                <div className="babies-member d-flex justify-content-between">
                                    <div>
                                        <h6>BABIES</h6>
                                        <p className='text-secondary'>Younger than 2</p>
                                    </div>
                                    <div className='minus-plus-count d-flex align-items-center'>
                                        <button className='minus-btn'>-</button>
                                        <input className='input-align ml-4' type="text" value='1' />
                                        <button className='plus-btn ml-4'>+</button>
                                    </div>
                                </div>
                                <div>
                                    <button className='search-btn'> <span ><img src={search} alt="" /></span>  Search</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 review-section mt-5">
                    <div className='ml-4 mt-5'>
                        <Review></Review>
                        <div style={{marginTop: '50px'}}><HomeReview></HomeReview></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchAndReview;