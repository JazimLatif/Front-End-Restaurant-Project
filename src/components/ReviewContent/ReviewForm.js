import {useState} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import '../Components.css'

const labels = {
  1: 'Dreadful',
  2: 'Poor',
  3: 'Okay',
  4: 'Very Good',
  5: 'Incredible',
};

const ReviewForm = ({ restaurants, reviewSubmit, loggedInUser }) => {

  const id = loggedInUser.id

  const updateComment = (event) => {
    setComment(event.target.value);

  }

  const updateDrop = (event) => {
    setDropSelect(event.target.value);
  }

  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);
  
  const [dropSelect, setDropSelect] = useState(null);
  const [comment,setComment] = useState("");

  const onReviewSubmit = (event) => {
    event.preventDefault();

    const review = 
      {
        restaurant_ID: dropSelect,
        customer_ID: id,
        rating: value,
        comment: comment
      }

      // console.log(review)

    reviewSubmit(review); 
    window.location.reload(false);


  }


  return (
    <div className="reviewPageForm"> 
      <form onSubmit={onReviewSubmit}>
        <h2>Thanks for visiting, please leave a review for the selected Restaurant using the slider and comment field below!</h2>

        <select onChange={updateDrop}>
          {restaurants.map(restaurant => (
            <option value={restaurant.id} label={restaurant.restaurantName}></option>)
          )}
        </select>

        <div className="slider">
        {/* ============================================== Rating mui stuff */}

        <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          icon={<FastfoodIcon  />}
          emptyIcon={<FastfoodIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}

    />

        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}

        {/* ====================================================== */}
        </div>

        <p>Leave a Comment:</p><input type="text" onChange={updateComment}/>
        <input type="submit" value="submit" />
      </form>

      <img src="https://media.discordapp.net/attachments/913726718169194496/916290019017228338/Screen_Shot_2021_09_30_at_11.png"/>
    </div>
  )
}

export default ReviewForm;