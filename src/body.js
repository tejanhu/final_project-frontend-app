import React, { Component } from 'react';

import Navbar from "./navbar.js";
import Question from './feature/game/question/Question';
import ReactDOM from "react-dom";
import Navigation from './feature/game/Navigation';


class Body extends Component{

    handleGame(){
        ReactDOM.render(<Navigation/>, document.getElementById("body"));
    }

    render(){
        return (
            <div id="body">

                <button onClick={this.handleGame}>Game</button>
            </div>);
    }
};

export default Body;