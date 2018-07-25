import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Game from "./feature/game/Game";

class App extends Component {

    handleGame(){
        ReactDOM.render(<Game/>, document.getElementById("root"));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.handleGame}>Game</button>
            </div>
        );
    }
}

export default App;
