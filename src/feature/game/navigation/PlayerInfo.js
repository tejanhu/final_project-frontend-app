import React, { Component } from 'react';
import './playerInfo.css';


class PlayerInfo extends Component {
    constructor(props) {
        super(props);
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
                <div className={"playerStats"}>
                    <div>Name: Player</div>
                    <div>HP: 10/10 | ATK: 5</div>
                    <div>Current level: 8</div>
                    <div>Score: {this.props.score}</div>
                </div>
                <img src={require("../../../resources/player.svg")} className="playerAvatar"></img>
            </div>
        );
    }
}

export default PlayerInfo;