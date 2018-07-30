import React, { Component } from 'react';
import Operators from "./operators";
import Statements from "./statements";
import Syntax from "./syntax";
import Introduction from "./introduction";
import '../lessons.css';

class MainJavascript extends Component {
    divStyle = {
        backgroundColor: '#00cbef',
        color: 'white',
        fontWeight: 'bold'
    };

    render () {
        return (
            <div className="panel-body">
                <ul className="list-group">
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#introductionjs">
                        <li style={this.divStyle} className="expanded-option list-group-item">Introduction</li>
                    </a><Introduction />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#syntaxjs">
                        <li style={this.divStyle} className="expanded-option list-group-item">Syntax</li>
                    </a><Syntax />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#statementsjs">
                        <li style={this.divStyle} className="expanded-option list-group-item">Statements</li>
                    </a><Statements />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#operatorsjs">
                        <li style={this.divStyle} className="expanded-option list-group-item">Operators</li>
                    </a><Operators />
                </ul>
            </div>
        )
    }
}
export default MainJavascript;