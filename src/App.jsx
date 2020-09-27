import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import HomePage from './components/homePage/HomePage';
import { userService } from './services/userService';


function App() {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  function handleLogout(){
    userService.logout();
  }
  return (
    <div className="App">
      <Router >
        <NavBar title="Birdwatchers Log Book" user={user} onLogout={handleLogout}/>
        <Route
          path='/home'
          render={(props) => (
            <HomePage {...props} user={user} />
          )}
        />
        <Route path="/login" component={Login} />
      </Router>

    </div>
  );
}

export default App;
