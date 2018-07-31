import React, { Component } from 'react';
import Operators from "./operators";
import Statements from "./statements";
import Syntax from "./syntax";
import Introduction from "./introduction";
import '../lessons.css';

class MainJavascript extends Component {
    itemStyle = {
        backgroundColor: '#0654d1',
        color: 'white',
        fontWeight: 'bold'
    };

    render () {
        return (
            <div className="panel-body">
                <ul className="list-group">
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#introductionjs">
                        <li style={this.itemStyle} className="list-group-item">Introduction</li>
                    </a><Introduction />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#syntaxjs">
                        <li style={this.itemStyle} className="list-group-item">Syntax</li>
                    </a><Syntax />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#statementsjs">
                        <li style={this.itemStyle} className="list-group-item">Statements</li>
                    </a><Statements />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#operatorsjs">
                        <li style={this.itemStyle} className="list-group-item">Operators</li>
                    </a><Operators />
                </ul>
            </div>
        )
    }
}
export default MainJavascript;