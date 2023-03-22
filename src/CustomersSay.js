import './CustomersSay.css'
import profilePicture from "./assets/profile picture.jpg"
import Review from './Review';

const reviews = [
    {rating: "Excellent", image: profilePicture, name: 'Jack', reviewText: 'Incredible food for fair price.'},
    {rating: "Very Good", image: profilePicture, name: 'Brandon', reviewText: 'Best quality food in the town.'},
    {rating: "Perfect", image: profilePicture, name: 'Anna', reviewText: 'Well balanced quality and price.'},
    {rating: "Good", image: profilePicture, name: 'Beth', reviewText: 'Brings holiday memories.'},
]

function CustomersSay(){
    return (<>
        <div className='testimonials-title'>
            <div className='background-testimonials'></div>
            <h1>Testimonials</h1>
        </div>
        <div className='testimonials'>
            {reviews.map((review, index) => <Review key={index} rating={review.rating} image={review.image} name={review.name} reviewText={review.reviewText} />)}
        </div>
    </>)
}

export default CustomersSay;