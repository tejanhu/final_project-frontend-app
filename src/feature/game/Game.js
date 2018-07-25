import React, {Component} from 'react';
import './game.css';
import PlayerInfo from './navigation/PlayerInfo';
import Compass from "./navigation/Compass";
import Difficulty from "./Difficulty";


class Game extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div>
                    <Difficulty/>
                    <div className="jumbotronMain">
                        <div className={"jumbotronPlayerInfo"}></div>
                        <PlayerInfo/>
                        <Compass/>
                    </div>
            </div>
    );
    }
}

export default Game;