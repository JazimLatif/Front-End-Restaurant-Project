import React from 'react'
import '../Components.css'

function NavBar({ loggedInUser, onLogOut }) {
    return (
        <div className="navBar">

            {loggedInUser ?
            <p>Hello {loggedInUser.name}!</p>
            :
            <p>AverageConnoisseurs</p>}
            {/* <img class="logo" src="https://cdn.discordapp.com/attachments/913726718169194496/914897116453826620/unknown.png"/> */}

            
            <a href="/">Home</a>

            {loggedInUser ?
                <a href="/" onClick={onLogOut}>Log Out</a>
                :
                <a href="/LogIn">Log In</a>
            }
            
            {loggedInUser ?
                <a href="/LeaveAReview">Leave a Review!</a>
                :
                <a href="/LogIn">Leave a Review!</a>
            }
            
            
            <a href="#Footer">Contact Us</a>
        </div>
    )
}

export default NavBar;
