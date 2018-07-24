import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navigation.css';
import Navbar from "../../navbar";
import Footer from "../../footer";



class Navigation extends Component {
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

                <h4>Difficulty selection:</h4>
                <button>Easy</button><button>Medium</button><button>Hard</button>
                <div className="jumbotronMain">
                    <div>
                        <div className={"playerInfo"}>
                            <div className={"jumbotronPlayerInfo"}>
                                <div>Name: Player</div>
                                <div>HP: 10/10 | ATK: 5</div>
                                <div>Current level: 8</div>
                                <div>To next level: 854/1000</div>
                            </div>
                        </div>
                        <img src={require("../../resources/people.svg")} className="player"></img>

                    </div>
                    <button className="buttonNorth">North</button>
                    <button className="buttonSouth">South</button>
                    <button className="buttonWest">West</button>
                    <button className="buttonEast">East</button>
                </div>
                <Footer/>
            </div>

    );
    }
}

export default Navigation;