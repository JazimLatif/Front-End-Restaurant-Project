import { useState, useEffect } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/SiteComponents/NavBar';
import Footer from './components/SiteComponents/Footer';
import Filter from './components/SiteComponents/Filter';
import LogIn from './components/LogInContent/LogIn'
import ReviewContainer from './containers/ReviewContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchButton from "./Button";


function getSessionStorageOfDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key)
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored)
}

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [loggedInUser, setLoggedInUser] = useState(
    getSessionStorageOfDefault('loggedInUser', null)
  );
  // const [loggedInCustomer, setLoggedInCustomer] = useState(null);

  useEffect(() => {
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
  }, [loggedInUser])

  const onLogIn = (user) => {
    setLoggedInUser(user);
  }

  const onLogOut = () => {
    setLoggedInUser(null);
  }

  return (
<div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
    <Router>
    <div className="App"> 
    <NavBar loggedInUser={loggedInUser} onLogOut={onLogOut}/>
    <div className="content">

      
      <Switch>
        <Route path="/" exact>
        <HomeContainer/>
        </Route>
      

        <Route path="/LogIn">
          <LogIn onLogIn={onLogIn}/>
        
        </Route>
       
        <Route path="/LeaveAReview">
          <ReviewContainer/>
        </Route>
      </Switch>
      

      </div>
      
      <div className="footer" id="Footer">
      <Footer/>
      </div>
      </div>
      </Router>
      <SwitchButton />
</div>

  );
  
}

export default App;
