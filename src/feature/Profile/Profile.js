import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './profile.css';
// import {Line, Circle} from 'react-progressbar.js';
import {Line, Circle} from 'rc-progress';

class Profile extends Component{

    handleChangeBackground(colour){

    };


    render(){

        var options = {
            strokeWidth: 2
        };

        var containerStyle = {
            width: '40%',
            text: 'level',
        };

        return(
            <div>
                <div className="jumbotronProfileMain">
                    <img className={"player"} src={require("../../resources/player.svg")}></img>
                    <div>
                        <h3 id={"profileTitle"}>Name's Profile</h3>
                        <div className={"profileInfo"}>
                            <Circle
                                percent={"10"}
                            strokeWidth={"3"}
                            trailWidth={"3"}
                            strokeColor={"#0732d3"}
                                style={containerStyle}/>
                            <div> Level: 1</div>
                        </div>

                    </div>
                    <br/><button>Change background</button>
                </div>
            </div>






        );
    }
}

export default Profile;