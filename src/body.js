import React, { Component } from 'react';

import Navbar from "./feature/Shell/navbar.js";
import Question from './feature/game/question/Question';
import ReactDOM from "react-dom";
import Game from './feature/game/Game';


class Body extends Component{

    handleGame(){
        ReactDOM.render(<Game/>, document.getElementById("body"));
    }

    render(){
        return (
            <div id="body">

                <button onClick={this.handleGame}>Game</button>
            </div>);
    }
};

export default Body;