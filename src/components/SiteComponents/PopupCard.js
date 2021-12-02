import '../Components.css'
import ReviewCardList from '../ReviewContent/ReviewCardList';
import Rating from '@mui/material/Rating';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { green } from '@mui/material/colors';

const PopupCard = ({ restaurant, onClick, show }) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";

    return (
      <div className={showHideClassName}>
        <section className="popup-main">
          
          <button onClick={onClick}>Close</button>
          
          <div>
          <h3>Name:</h3>
          <p>{restaurant.restaurantName}</p>
          <h4>Address:</h4>
          <p>{restaurant.address}</p>
          <h4>Cuisine:</h4>
          <p>{restaurant.cuisine}</p>
          <h4>Price:</h4>
          <p>{<Rating icon={ <CurrencyPoundIcon style={{fill: "green"}}/>} emptyIcon={<CurrencyPoundIcon/>} value={restaurant.price} precision={0.5}  readOnly />}</p>
          <h4>Vegetarian:</h4>
          <p>{restaurant.vegetarian ? "Yes" : "No"}</p>
          <h4>Halal:</h4>
          <p>{restaurant.halal ? "Yes" : "No"}</p>
          <h4>Gluten free:</h4>
          <p>{restaurant.glutenFree ? "Yes" : "No"}</p>
          {/* {console.log(restaurant.reviews[0].comment)} */}
          
          <h4>Reviews:</h4>
          <ReviewCardList reviews={restaurant.reviews} />
          <b><a href="/LeaveAReview">Leave a Review!</a></b>




          {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}

          </div>
        </section>
      </div>
    );
  };

export default PopupCard;