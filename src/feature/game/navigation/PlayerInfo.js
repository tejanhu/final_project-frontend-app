import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../game.css';


class PlayerInfo extends Component {
    state = {loading: false};

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div>
                <div className={"playerInfo"}>
                    <div>Name: Player</div>
                    <div>HP: 10/10 | ATK: 5</div>
                    <div>Current level: 8</div>
                    <div>To next level: 854/1000</div>
                </div>
                <img src={require("../../../resources/people.svg)} className="player"></img>
            </div>
        );
    }
}

export default PlayerInfo;