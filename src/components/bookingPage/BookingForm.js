import { useState, useEffect } from 'react';
import './BookingForm.css'
import moment from 'moment/moment';
import restaurant from '../../assets/restaurant.jpg'

function BookingForm(props){

    const [bookingInfo, setBookingInfo] = useState({
        date: props.state.date,
        time: null,
        guests: 1,
        occasion: 'Birthday'
    });

    useEffect(() => console.log(bookingInfo), [bookingInfo])

    const handleSubmit = (e) =>{
        props.submitForm(bookingInfo);
        e.preventDefault();
    }

    const getIsFormValid = () =>{
        return bookingInfo.time != null;
    }

    return(
        <>
        <h1 className='reservation-details'>Reservation details</h1>
        <div className='booking-form'>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" defaultValue={moment(props.state.date).format('YYYY-MM-DD')} min={moment().format('YYYY-MM-DD')}  max={moment().add(1, 'months').format('YYYY-MM-DD')} onChange={(e) => {setBookingInfo({...bookingInfo, date: e.target.valueAsDate}); props.dispatch({date: e.target.valueAsDate})}}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => setBookingInfo({...bookingInfo, time: e.target.value})}>
                <option style={{display: 'none'}}>Select time</option>
                {props.state.availableTimes.map((time, index) => <option key={index}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setBookingInfo({...bookingInfo, guests: e.target.value})}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setBookingInfo({...bookingInfo, occasion: e.target.value})} value={bookingInfo.occasion}>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
            </select>
            <input className='submit' type="submit" value="Make Your Reservation" disabled={!getIsFormValid()}/>
            </form>
        </div>
        <div className='restaurant-image'>
            <img id='restaurant-image' src={restaurant} alt='restaurant'/>
        </div>
        </>
    )
}

export default BookingForm;