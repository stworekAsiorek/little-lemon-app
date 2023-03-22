import restaurantfood from './assets/restaurantfood.jpg'
import "./CallToAction.css"
import Button from './Button';

function CallToAction(){
    return (
    <>
        <div className="call-to-action-text">
            <div className='background-call-to-action'></div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget tellus et purus fringilla aliquam.</p>
            <Button text='Reserve a table' href='/booking' style={{backgroundColor: '#F4CE14'}}/>
        </div>
        <div className="call-to-action-image">
            <img src={restaurantfood} alt='restaurantfood'/>
        </div>
    </>
    )
}

export default CallToAction;