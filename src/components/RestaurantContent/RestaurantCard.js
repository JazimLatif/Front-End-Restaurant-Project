import React from 'react'
import '../Components.css'

function RestaurantCard({ restaurant, onClick }) {

  let imageChoice = 'Default'
  switch(restaurant.cuisine){
      case 'Chicken':imageChoice='https://www.seriouseats.com/thmb/LJQ1jFVrlJbSb23MmK5iwHUr_EY=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg'; break;
      case 'Japanese':imageChoice='https://www.builtlean.com/wp-content/uploads/2011/05/healthy-japanese-food-guide.jpg'; break;
      case 'Korean':imageChoice='https://www.thespruceeats.com/thmb/2sIsaW9T1SzmiMs7uJ0EXn6JDio=/3060x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg'; break;
      case 'American':imageChoice='https://voices.shortpedia.com/wp-content/uploads/2021/10/american-cuisine-1200x900@1000worldrecipes.jpg'; break;
      case 'Kebab':imageChoice='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/82465f0e-2ce3-4aa9-8376-0d8f8fab1aa0.jpg'; break;
      case 'Mexican':imageChoice='http://theheritagecook.com/wp-content/uploads/2010/06/tacos-with-red-jalapenos-istock.jpg'; break;
      case 'Bakery':imageChoice='https://b.zmtcdn.com/data/pictures/chains/1/16574171/1ef75042dcb919b4faaa71b23030d7aa.jpg?fit=around|750:500&crop=750:500;*,*'; break;
      case 'Chinese':imageChoice='https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000442/img/basic/a0000442_main.jpg?20170412180838&q=80&rw=750&rh=536'; break;
      case 'Indian':imageChoice='https://www.theshaftesbury.com/blog/wp-content/uploads/2017/08/Indian-takeaway-at-a-Londons-market.jpg'; break;
      case 'Hamburger':imageChoice='https://cdn.discordapp.com/attachments/913726718169194496/914897116453826620/unknown.png'; break;
      case 'Italian':imageChoice='https://media4.giphy.com/media/iuumSq0ElSFzDK75JF/giphy.gif'; break;
      case 'French':imageChoice='https://www.getflavor.com/wp-content/uploads/2019/01/4-Taureaux-Spread.jpg'; break;
  }
  
  return(
      <div onClick={()=>onClick(restaurant.id)} className="restaurantCard">

          <img class="cuisineImage" src={imageChoice} alt='Picture of food'/>

          <h3>Name:</h3>
          <p>{restaurant.restaurantName}</p>
          <h4>Address:</h4>
          <p>{restaurant.address}</p>
          <h4>Cuisine:</h4>
          <p>{restaurant.cuisine}</p>
          <h4>Price:</h4>
          <p>{restaurant.price}/5</p>
          <h4>Vegetarian:</h4>
          <p>{restaurant.vegetarian ? "Yes" : "No"}</p>
          <h4>Halal:</h4>
          <p>{restaurant.halal ? "Yes" : "No"}</p>
          <h4>Gluten free?</h4>
          <p>{restaurant.glutenFree ? "Yes" : "No"}</p>

          {/* <button onClick={() => onQuickView(restaurant.id)}>Review Page</button> */}
          {/* <hr/> */}
      </div>
  )
}

export default RestaurantCard
