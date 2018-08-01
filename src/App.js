import React, { Component } from 'react';
import Navbar from "./feature/Shell/navbar.js";
import Footer from "./feature/Shell/footer.js";
import Home from "./feature/homepage/Home";
import Game from "./feature/game/Game";
import About from "./feature/About/about";
import Lessons from "./feature/Lessons/Lessons";
import Contact from "./feature/Contact/contact";
import Glossary from "./feature/Glossary/Glossary";
import Books from "./feature/Books/Books";
import LeaderBoard from "./feature/LeaderBoard/leaderboard";
import Register from "./Registration/App";

import Profile from "./feature/Profile/Profile";

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pageName: "home",
            user:null,
        };
    }

    getCurrentPage(){
      switch(this.state.pageName) {
          case "home":
              return <Home handleClick={(newPage) => this.handleClick(newPage)}/>
          case "game":
              return <Game />
          case "about":
              return <About />
          case "contact":
              return <Contact />
          case "glossary":
              return <Glossary />
          case "lessons":
              return <Lessons />
          case "books":
              return <Books />
          case "leaderboard":
              return<LeaderBoard />
          case "register":
              return<Register />
          case "profile":
              return <Profile/>
          default:
              return <Home />
      }  
    }

    handleClick(newPage){

        this.setState({
            pageName: newPage
        })
    }

    render() {

        return (
            <div>
                <Navbar handleClick={(newPage) => this.handleClick(newPage)}/>
                <div id ="body">
                    {this.getCurrentPage()}
                </div>
                <Footer handleClick={(newPage) => this.handleClick(newPage)}/>
            </div>
    );
    }
}




export default App;