import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import HomePage from './components/homePage/HomePage';


function App() {
  return (
    <div className="App">
      <Router >
        <NavBar title="Birdwatchers Log Book" />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
      </Router>

    </div>
  );
}

export default App;
