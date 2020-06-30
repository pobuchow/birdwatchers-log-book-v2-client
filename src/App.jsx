import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import HomePage from './components/homePage/HomePage';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  function handleLogout(){
    setUser(null);
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
