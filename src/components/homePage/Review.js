import './Review.css'

function Review(props){
    return (
        <div className='review'>
            <h3>{props.rating}</h3>
            <div className='user-data'>
                <img src={props.image} alt='profile'/>
                <h4>{props.name}</h4>
            </div>
            <p>{props.reviewText}</p>
        </div>
        )
}

export default Review;