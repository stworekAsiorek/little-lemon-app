import "./CallToHome.css"
import Button from '../Button'
import marioAndAdrianb from '../../assets/Mario and Adrian b.jpg'

function CallToHome(){
    return (
        <>
            <div className="call-to-home">
                <div className='background-call-to-home'></div>
                <h1 className='light-beige'>Reserve a table</h1>
                <Button text='< Back to home' href='/' style={{backgroundColor: '#333333', color: '#EDEFEE'}}/>
            </div>
            <div className='call-to-home-image'>
                <img id='Mario-and-Adrian-b' src={marioAndAdrianb} alt='Mario and Adrian'/>
            </div>
        </>
    )
}

export default CallToHome;