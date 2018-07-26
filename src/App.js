import React, { Component } from 'react';
import Navbar from "./feature/Shell/navbar.js";
import Body from "./body.js";
import Footer from "./feature/Shell/footer.js";
import Home from "./feature/homepage/Home";
import Game from "./feature/game/Game";
import Contact from "./feature/Contact/contact";


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pageName: "home",
        };
    }

    getCurrentPage(){
      switch(this.state.pageName) {
          case "home":
              return <Home handleClick={(newPage) => this.handleClick(newPage)}/>
          case "game":
              return <Game />
          case "contact":
              return <Contact />
          default:
              return <Home />
      }  
    }

    handleClick(newPage){
        console.log("icon has been clicked");
        console.log("pagename is " + newPage);
        this.setState({
          pageName: newPage
        })
    }

  render() {
    console.log("App is rendering this function is rendering");
    console.log("this.state.pageName is " + this.state.pageName);
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
