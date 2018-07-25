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
                </div>
            </div>
        )
    }
}

export default Question;