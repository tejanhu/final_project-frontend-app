import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './game.css';
import Layout from './navigation/Layout';
import PlayerInfo from './navigation/PlayerInfo';
import Compass from "./navigation/Compass";


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
                <Layout/>
                <PlayerInfo/>
                <Compass/>
            </div>
    );
    }
}

export default Game;