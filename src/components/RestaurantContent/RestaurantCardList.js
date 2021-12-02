import React from 'react'
import RestaurantCard from './RestaurantCard'



function RestaurantCardList({ restaurants, onClick }) {
    const listOfRestaurants = restaurants.map(restaurant => {
    return (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} onClick={onClick}/>
    )
})
    return (
        <div className = "list">
            {listOfRestaurants} 
        </div>
    )


}


export default RestaurantCardList
