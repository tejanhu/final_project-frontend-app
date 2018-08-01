import React, { Component } from 'react';
import './battleInfo.css';
import PlayerInfo from "../navigation/PlayerInfo";
import EnemyInfo from "./EnemyInfo";


class BattleInfo extends Component {

    render() {
        return (
                <div className={"battleInfo"}>
                    <div><img src={require("../../../resources/versus.png")} className={"versus"}></img></div>
                    <div><EnemyInfo/></div>
                </div>
        );
    }
}

export default BattleInfo;