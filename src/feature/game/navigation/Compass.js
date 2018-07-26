import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../game.css';
import Question from "../question/Question";
import Arrow from "./Arrow";



class Compass extends Component {
    constructor(props) {
        super(props);
    }

    // handleQuestion() {
    //     ReactDOM.render(<Question/>, document.getElementById("body"));
    // }

    renderArrow(direction){
        return <Arrow
            direction={direction}
            onClick={() => this.props.handleArrowPress(direction)}
            />;
    }

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
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


