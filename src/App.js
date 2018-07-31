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
import Login from "./feature/Login/login";
import Signup from "./feature/Signup/signup";

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
                return <Game  />
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
            case "login":
                return <Login/>
            case "signup":
                return <Signup/>
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