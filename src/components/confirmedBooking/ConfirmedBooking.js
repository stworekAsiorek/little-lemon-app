import "./ConfirmedBooking.css"
import Button from '../Button'

function ConfirmedBooking(){
    return (
        <>
            <div className="confirmed-booking">
                <div className='background-confirmed-booking'></div>
                <h1 className='light-beige'>Reservation accepted</h1>
                <p className="highlight light-beige">We are happy to confirm your visit at our restaurant. If you wish to cancel the reservation, please use our contact data.</p>
                <Button text='< Back to home' href='/' style={{backgroundColor: '#333333', color: '#EDEFEE'}}/>
            </div>
        </>
    )
}

export default ConfirmedBooking; 