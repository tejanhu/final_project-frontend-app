import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './profile.css';
import {Line, Circle} from 'rc-progress';
import Achievement from './Achievements/Achievement';
import * as fire from "firebase";

class Profile extends Component{

    handleChangeBackground(colour){

    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName : '',
            lastName: '',
            score :''

        }
    }

    componentDidMount() {
        const self = this;

        let myScore = '';
        fire.auth().onAuthStateChanged(function(user){
            if (user){
                user = fire.auth().currentUser;
                self.setState({
                    email: user.email
                })
                {fire.database().ref('Player').child(user.uid).child('Score').on("value", function(datasnapshot)
                {
                    myScore = datasnapshot.val();
                    self.setState({
                        score: myScore
                    })
                })
                }
            }else{

            }
        })
    }

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
                        <div className={"levelInfo"}>
                            <Circle
                                percent={((this.state.score)/10).toString()}
                                strokeWidth={"10"}
                                trailWidth={"10"}
                                strokeColor={"#0732d3"}
                                style={containerStyle}/>
                            <div> Level: 1</div>
                        </div>
                        <table id={"userInfo"} align="center">
                            <tr style={{textAlign:"right"}}>
                            </tr>
                            <br/>
                            <tr style={{textAlign:"right"}}>
                                <td> E-mail: {this.state.email}
                                </td>
                            </tr>
                            <br/>
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
                                percent={"19"}
                                strokeWidth={"10"}
                                trailWidth={"10"}
                                strokeColor={"#0732d3"}
                                style={containerStyle}/>
                            <div>Rank: 3</div>
                            <div>W/L Ratio</div>
                        </div>

                        <br/><img src={require("../../resources/color_wheel.svg")} id={"backgroundButton"}></img>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;