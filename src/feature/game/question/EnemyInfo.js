import React, { Component } from 'react';
import '../game.css';


class EnemyInfo extends Component {
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
                    <div>Name: Enemy</div>
                    <div>HP: 5/5 | ATK: 2</div>
                    <div>Level: 3</div>
                </div>
                <img src={require("../../../resources/enemy.png")} className="enemy"></img>
            </div>
        );
    }
}

export default EnemyInfo;