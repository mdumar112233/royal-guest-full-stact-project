import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import downArrow from '../../images/down-arrow.png';
import upArrow from '../../images/upload.png';
import plus from '../../images/plus.png';
import minus from '../../images/remove.png';
import './SearchSection.css';

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
                    <div className="set-date" style={{width: '300px'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <div style={{width: '130px'}}>
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
                            <div style={{width: '130px', textAlign: 'left'}}>
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
                                <p style={{marginLeft: '-15px'}}>Guest</p>
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
                                Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 review-section">

                </div>
            </div>
        </div>
    );
};

export default SearchAndReview;