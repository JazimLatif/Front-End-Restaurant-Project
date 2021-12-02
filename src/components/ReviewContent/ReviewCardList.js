import ReviewCard from "./ReviewCard";

const ReviewCardList = ({ reviews }) => {

    const listOfReviews = reviews.map(review => {
        return (
            <ReviewCard key={review.id} review={review} 
                // onClick={onClick}
            />
        )
    })


    return (
        <div className="ReviewCardList">
            {listOfReviews}
        </div>
    )
}

export default ReviewCardList;