import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar.js";
import Body from "./body.js";
import Footer from "./footer.js";
import Navigation from "./feature/game/Navigation";

class App extends Component {



  render() {
    return (
        <div>
            <Navbar/>

            <Body/>

            <Footer/>
        </div>











    );
  }



}

export default App;
