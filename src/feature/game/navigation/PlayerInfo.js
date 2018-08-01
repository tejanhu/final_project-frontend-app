import React, { Component } from 'react';
import './playerInfo.css';
import * as fire from "firebase";


class PlayerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            email: ''
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

    render() {
        return (
            <div>
                <div className={"playerStats"}>
                    <div>Name: Player</div>
                    <div>HP: 10/10 | ATK: 5</div>
                    <div>Current level: 8</div>
                    <div>Score: {this.state.score}</div>
                    <div>Email: {this.state.email}</div>
                </div>
                <img src={require("../../../resources/player.svg")} className="playerAvatar"></img>
            </div>
        );
    }
}

export default PlayerInfo;