import { useState } from 'react';
import './BookingForm.css'
import moment from 'moment/moment';
import restaurant from '../../assets/restaurant.jpg'

function BookingForm(){
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

    const [bookingInfo, setBookingInfo] = useState({
        date: null,
        time: availableTimes[0],
        guests: 1,
        occasion: 'Birthday'
    });

    const getIsFormValid = () =>{
        if(bookingInfo.date == null){
            return false;
        }
        return true;
    }

    return(
        <>
        <h1 className='reservation-details'>Reservation details</h1>
        <div className='booking-form'>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" min={moment().add(1, 'days').format('YYYY-MM-DD')}  max={moment().add(1, 'months').format('YYYY-MM-DD')} onChange={(e) => setBookingInfo({...bookingInfo, date: e.target.valueAsDate})}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => setBookingInfo({...bookingInfo, time: e.target.value})}>
                {availableTimes.map((time, index) => <option key={index}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setBookingInfo({...bookingInfo, guests: e.target.value})}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setBookingInfo({...bookingInfo, occasion: e.target.value})}>
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