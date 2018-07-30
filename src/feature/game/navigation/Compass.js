import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../game.css';
import Question from "../question/Question";
import Arrow from "./Arrow";



class Compass extends Component {
    constructor(props) {
        super(props);
    }
    renderArrow(direction){
        return <Arrow
            direction={direction}
            onClick={() => this.props.handleArrowPress(direction)}
            />;
    }

    render() {
        return (
            <div>
                {this.renderArrow("NORTH")}
                {this.renderArrow("SOUTH")}
                {this.renderArrow("WEST")}
                {this.renderArrow("EAST")}
            </div>
        );
    }
}

export default Compass;


