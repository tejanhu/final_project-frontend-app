import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './profile.css';
import {Line, Circle} from 'rc-progress';
import Achievement from './Achievements/Achievement';

class Profile extends Component{

    handleChangeBackground(colour){

    };

    render(){

        var options = {
            strokeWidth: 2
        };

        var containerStyle = {
            width: '40%',
        };

        return(
            <div>
                <div className="jumbotronProfileMain">
                    <div>
                        <img className={"player"} src={require("../../resources/player.svg")}></img>
                        <h2 id={"profileTitle"}>Name's Profile</h2>
                        <div className={"levelInfo"}>
                            <Circle
                                percent={"10"}
                                strokeWidth={"10"}
                                trailWidth={"10"}
                                strokeColor={"#0732d3"}
                                style={containerStyle}/>
                            <div> Level: 1</div>
                        </div>
                        <table id={"userInfo"} align="center">
                            <tr style={{textAlign:"right"}}>
                                <td> First name: <input type="text" value="first name" disabled/></td>
                                <td> Last name: <input type="text" value="last name" disabled/></td>
                            </tr>
                            <br/>
                            <tr style={{textAlign:"right"}}>
                                <td> D.O.B. <input type={"text"} value={"dob"} disabled/></td>
                                <td> E-mail: <input type={"text"} value={"email"} disabled/>
                                </td>
                            </tr>
                            <br/>
                            <tr style={{textAlign:"right"}}>
                                <td></td>
                                <button type={"button"} className={"btn btn-warning"}>Change password</button>
                            </tr>
                        </table>
                        <Achievement/>
                        <div className={"levelRankInfo"}>
                            <Circle
                                percent={"50"}
                                strokeWidth={"10"}
                                trailWidth={"10"}
                                strokeColor={"#0732d3"}
                                style={containerStyle}/>
                            <div>Rank: 25</div>
                            <div>Level</div>
                        </div>
                        <div className={"ratioRankInfo"}>
                            <Circle
                                percent={"99"}
                                strokeWidth={"10"}
                                trailWidth={"10"}
                                strokeColor={"#0732d3"}
                                style={containerStyle}/>
                            <div>Rank: 3</div>
                            <div>W/L Ratio</div>
                        </div>
                            <div>
                                <button id={"logout"} type={"button"} className={"btn btn-danger"}>Log out</button>
                            </div>
                        <br/><img src={require("../../resources/color_wheel.svg")} id={"backgroundButton"}></img>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;