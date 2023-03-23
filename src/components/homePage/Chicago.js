import './Chicago.css'
import marioAndAdrianA from '../../assets/Mario and Adrian A.jpg'
import restaurantChefB from '../../assets/restaurant chef B.jpg'

function Chicago(){
    return (<>
        <div className="chicago-text">
            <div className='background-chicago'></div>
            <h1 className='yellow'>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className='light-beige highlight'>Aenean a scelerisque dui. Aenean tempor condimentum velit, quis interdum nulla. Duis dignissim, ipsum sit amet fringilla semper, est enim molestie ante, sed tempus magna metus sed ante. Phasellus ac rutrum purus. Curabitur laoreet iaculis mi, id vehicula lorem malesuada ut. Maecenas tristique, dolor at pulvinar mattis, erat nisi lobortis sapien, id venenatis lacus nunc id nulla. Aenean ullamcorper eu mauris quis aliquam. Fusce condimentum ac erat at finibus. Proin cursus tortor sit amet porttitor rhoncus.</p>
        </div>
        <div className="chicago-images">
            <img id='Mario-and-Adrian-A' src={marioAndAdrianA} alt='restaurantfood'/>
            <img id='restaurant-chef-b' src={restaurantChefB} alt='restaurantfood'/>
        </div>
    </>)
}

export default Chicago;