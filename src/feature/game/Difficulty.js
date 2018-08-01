import React, { Component } from 'react';
import './game.css';


class Difficulty extends Component {

    render() {
        return (
            <div className={"difficultyMain"}>
                <h4 className={"difficultyTitle"}>Difficulty selection:</h4>
                <button id={"easy"} className={"difficulty"}>Easy</button>
                <button id={"medium"} className={"difficulty"}>Medium</button>
                <button id={"hard"} className={"difficulty"}>Hard</button>
            </div>
        );
    }
}

export default Difficulty;