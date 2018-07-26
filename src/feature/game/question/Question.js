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
                    <div className={"jumbotronQuestion"}></div>
                    <BattleInfo/>
                    <div className={"storyText"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.</div>
                    <div className="question">
                        <div id={"title"}>Question:<br/>What will add(5,2) output when ran? </div>
                    </div>
                    <div id={"answer1"} className={"question"}>6</div>
                    <div id={"answer2"} className={"question"}>6</div>
                    <div id={"answer3"} className={"question"}>6</div>
                    <div id={"answer4"} className={"question"}>6</div>
                </div>
            </div>
        )
    }
}

export default Question;