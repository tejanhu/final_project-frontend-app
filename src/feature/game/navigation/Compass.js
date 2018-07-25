import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../game.css';
import Question from "../question/Question";

class Compass extends Component {
    state = {loading: false};

    handleQuestion() {
        ReactDOM.render(<Question/>, document.getElementById("body"));
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
                <button className="buttonNorth" onClick={this.handleQuestion}>North</button>
                <button className="buttonSouth" onClick={this.handleQuestion}>South</button>
                <button className="buttonWest" onClick={this.handleQuestion}>West</button>
                <button className="buttonEast" onClick={this.handleQuestion}>East</button>
            </div>
        );
    }
}

export default Compass;


