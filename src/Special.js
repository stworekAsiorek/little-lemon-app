import './Special.css'
import basket from './assets/basket .svg'

function Specials(props){
    return (
        <div className='special'>
            <img src={props.image} alt='special'/>
            <div className='details'>
                <div className='title-and-price'>
                    <h3>{props.title}</h3>
                    <h4>${props.price}</h4>
                </div>
                <div className='description'>
                    <p>
                        {props.description}
                    </p>
                    <a href='/order-online'>
                        <p>
                            Order a delivery
                        </p>
                        <img src={basket} alt='basket'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Specials;