import './Specials.css'
import Button from '../Button';
import Special from './Special'
import bruschetta from '../../assets/bruchetta.jpg'
import lemonDessert from '../../assets/lemon dessert.jpg'
import greekSalad from '../../assets/greek salad.jpg'

const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget tellus et purus fringilla aliquam. Praesent aliquam enim.'

const specials = [
    {image: greekSalad, title: 'Greek Salad', price: '12.99', description: description},
    {image: bruschetta, title: 'Bruschetta', price: '5.00', description: description},
    {image: lemonDessert, title: 'Lemon Dessert', price: '5.99', description: description}
]

function Specials(){
    return (
    <div className="specials-container">
        <div className="specials-header">
            <div className='title'>
                <h1>Specials</h1>
            </div>
            <div id='button'>
                <Button text='Online Menu' href='/order-online' style={{backgroundColor: '#F4CE14', color: '#333333'}}/>
            </div>
        </div>
        <div className="specials">
            {specials.map((special, index) => <Special key={index} image={special.image} title={special.title} price={special.price} description={special.description}/>)}
        </div>
    </div>
    )
}

export default Specials;