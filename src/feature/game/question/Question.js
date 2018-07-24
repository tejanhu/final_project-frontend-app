import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
                <h4>Difficulty selection:</h4>
                <button>Easy</button><button>Medium</button><button>Hard</button>
                <div className="jumbotron">
                    <img src={require("../../../resources/people.svg")} className="player"></img>

                </div>
            </div>
        )
    }
}

export default Question;