import React, { Component } from 'react';
import '../game.css';

class Compass extends Component {
    state = {loading: false};

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div>
                <button className="buttonNorth">North</button>
                <button className="buttonSouth">South</button>
                <button className="buttonWest">West</button>
                <button className="buttonEast">East</button>
            </div>
        );
    }
}

export default Compass;


