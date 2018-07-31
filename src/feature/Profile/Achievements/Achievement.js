import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './achievement.css';

class Achievement extends Component {


    render() {
        return(
            <div>
                <h2 className={"achievementTitle"}>Achievements</h2>
                <table>
                    <tr>
                        <img id={"achievement1"} className={"achievement"} src={require("../../../resources/achievement1.png")}></img>
                    </tr>
                    <tr>
                        <img id={"achievement2"} className={"achievement"} src={require("../../../resources/achievement2.png")}></img>
                    </tr>
                    <tr>
                        <img id={"achievement3"} className={"achievement"} src={require("../../../resources/achievement3.png")}></img>
                    </tr>
                    <tr>
                        <img id={"achievement4"} className={"achievement"} src={require("../../../resources/achievement4.png")}></img>
                    </tr>
                    <tr>
                        <img id={"achievement5"} className={"achievement"} src={require("../../../resources/achievement5.png")}></img>
                    </tr>
                    <tr>
                        <img id={"achievement6"} className={"achievement"} src={require("../../../resources/achievement6.png")}></img>
                    </tr>
                    <tr>
                        <button id={"moreachieve"} className={"achievement"}>More</button>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Achievement;