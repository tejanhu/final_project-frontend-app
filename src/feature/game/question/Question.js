import React, { Component } from 'react';
import Difficulty from "../Difficulty";
import BattleInfo from "./BattleInfo";


class Question extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render(){
        return (
            <div>
                <Difficulty/>
                <div className="jumbotronMain">
                    <div className={"jumbotronPlayerInfo"}></div>
                    <div className={"jumbotronEnemyInfo"}></div>
                    <BattleInfo/>
                    <div className={"storyText"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                </div>
            </div>
        )
    }
}

export default Question;