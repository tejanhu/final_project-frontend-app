import React, { Component } from 'react';
import '../game.css';
import PlayerInfo from "../navigation/PlayerInfo";
import EnemyInfo from "./EnemyInfo";


class BattleInfo extends Component {
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
                <div className={"battleInfo"}>
                    <div><PlayerInfo/></div>
                    <div><img src={require("../../../resources/versus.png")} className={"versus"}></img></div>
                    <div><EnemyInfo/></div>
                </div>
            </div>
        );
    }
}

export default BattleInfo;