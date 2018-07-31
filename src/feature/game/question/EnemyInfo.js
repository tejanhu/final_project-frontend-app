import React, { Component } from 'react';
import '../game.css';


class EnemyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enemyName: "Enemy",
            currentHp: 5,
            maxHp: 5,
            currentLevel: 3
        };
    }
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
                <div className={"enemyInfo"}>
                    <div>Name: {this.state.enemyName}</div>
                    <div>HP: {this.state.currentHp}/{this.state.maxHp} | ATK: 2</div>
                    <div>Level: {this.state.currentLevel}</div>
                </div>
                <img src={require("../../../resources/enemy.png")} className="enemy"></img>
            </div>
        );
    }
}

export default EnemyInfo;