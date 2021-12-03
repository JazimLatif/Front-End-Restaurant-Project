import ReviewForm from '../components/ReviewContent/ReviewForm'
import {useState, useEffect} from 'react';

const ReviewContainer = ({ loggedInUser }) => {
    const [restaurants, setRestaurants] = useState([]);

    const getRestaurantData = () => {
        fetch("http://localhost:8080/restaurant/allRestaurants")
            .then(response => response.json())
            .then(data => setRestaurants(data));
    }

    useEffect(() => {
        getRestaurantData();
    },[]);

    const reviewSubmit = (review) => {
        fetch("http://localhost:8080/review", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(getRestaurantData);    
    }

    // const selectRestaurants = ()=>{
    //     const newList = [...restaurants]
    //     const restaurantToShow = newList.find(restaurants => restaurants.name.length>0);
    //     setRestaurants(restaurantToShow)
    // }

    return (
        <ReviewForm restaurants={restaurants} reviewSubmit={reviewSubmit} loggedInUser={loggedInUser}/>
    )
}

export default ReviewContainer;
