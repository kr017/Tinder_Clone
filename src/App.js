import React from 'react';
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from "./components/TinderCards";

function App() {
  return (
    
    <div className="App">

      {/* header */}
      <Header />

      <Router>
      <Switch>
       

        <Route path="/chat">
          <h1>ChatPage</h1>
        </Route>


        <Route path="/">
          <TinderCards />
        </Route>


      </Switch>

      </Router>


      {/* cards */}
      
      
      {/* Buttons below tinder cards */}

      {/* chat screen */}
      {/* indiviual chat screen */}


    </div>
  );
}

export default App;
