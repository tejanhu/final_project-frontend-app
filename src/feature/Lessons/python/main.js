import React, { Component } from 'react';
import Variables from "./variables";
import Numbers from "./numbers";
import Syntax from "./syntax";
import Introduction from "./introduction";
import '../lessons.css';

class MainPython extends Component {
    itemStyle = {
        backgroundColor: '#0654d1',
        color: 'white',
        fontWeight: 'bold'
    };

    render () {
        return (
            <div className="panel-body">
                <ul className="list-group">
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#introductionpy">
                        <li style={this.itemStyle} className="list-group-item">Introduction</li>
                    </a><Introduction />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#syntaxpy">
                        <li style={this.itemStyle} className="list-group-item">Syntax</li>
                    </a><Syntax />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#variablespy">
                        <li style={this.itemStyle} className="list-group-item">Variables</li>
                    </a><Variables />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#numberspy">
                        <li style={this.itemStyle} className="list-group-item">Numbers</li>
                    </a><Numbers />
                </ul>
            </div>
        )
    }
}
export default MainPython;