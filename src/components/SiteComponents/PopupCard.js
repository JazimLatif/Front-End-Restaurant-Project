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
          
          <button className="popup-btn" onClick={onClick}>X</button>
          
              <div className="popup-info">
                <div className = "card-info">
                  <h3>Name:</h3>
                  <h3>{restaurant.restaurantName}</h3>
                </div>
                <div className = "card-info">
                  <h4>Address:</h4>
                  <h4>{restaurant.address}</h4>
                </div>
                <div className = "card-info">
                  <h4>Cuisine:</h4>
                  <h4>{restaurant.cuisine}</h4>
                </div>
                <div className = "card-info">
                  <h4>Price:</h4>
                  <h4>{<Rating icon={ <CurrencyPoundIcon style={{fill: "green"}}/>} emptyIcon={<CurrencyPoundIcon/>} value={restaurant.price} precision={0.5}  readOnly />}</h4>
                </div>
                <div className = "card-info">
                  <h4>Vegetarian:</h4>
                  <h4>{restaurant.vegetarian ? "Yes" : "No"}</h4>
                </div>  
                <div className = "card-info">
                  <h4>Halal:</h4>
                  <h4>{restaurant.halal ? "Yes" : "No"}</h4>
                </div>
                <div className = "card-info">
                  <h4>Gluten free:</h4>
                  <h4>{restaurant.glutenFree ? "Yes" : "No"}</h4>
                </div>
                <div className="reviewStuff">
                  <h4>Reviews:</h4>
                  <ReviewCardList reviews={restaurant.reviews} />
                </div>
              </div>


          {/* <button type="button" onClick={handleClose}>
            Close
          </button> */}
        </section>
      </div>
    );
  };

export default PopupCard;