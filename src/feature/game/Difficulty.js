import React, { Component } from 'react';
import './game.css';


class Difficulty extends Component {
    state = {loading: false};

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className={"difficulty"}>
                <h4>Difficulty selection:</h4>
                <button id={"easy"} className={"difficulty"}>Easy</button>
                <button id={"medium"} className={"difficulty"}>Medium</button>
                <button id={"hard"} className={"difficulty"}>Hard</button>
            </div>
        );
    }
}

export default Difficulty;