import Rating from '@mui/material/Rating';



const ReviewCard = ({ review }) => {


    return (
        <div className="ReviewCard">
            <hr/>
            <h3>Rating:</h3>
            <p>{<Rating value={review.rating} precision={0.1}  readOnly />}</p>
            <h3>Comment:</h3>
            <p>{review.comment}</p>
            <hr/>
        </div>
        
    )
}

export default ReviewCard