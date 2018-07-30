import React, { Component } from 'react';
import Overview from "./overview";
import Setup from "./setup";
import Syntax from "./syntax";
import ObjAndClass from "./objandclass";
import '../lessons.css';

class MainJava extends Component {
    divStyle = {
        backgroundColor: '#00cbef',
        color: 'white',
        fontWeight: 'bold'
    };

    render () {
        return (
            <div className="panel-body">
                <ul className="list-group">
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#overview">
                        <li style={this.divStyle} className="expanded-option list-group-item">Overview</li>
                    </a><Overview />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#setup">
                        <li style={this.divStyle} className="expanded-option list-group-item">Set up</li>
                    </a><Setup />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#syntax">
                        <li style={this.divStyle} className="expanded-option list-group-item">Basic Syntax</li>
                    </a><Syntax />
                    <a className="link" data-toggle="collapse" data-parent="#collapse1" href="#objandclass">
                        <li style={this.divStyle} className="expanded-option list-group-item">Objects & Classes</li>
                    </a><ObjAndClass />
                </ul>
            </div>
        )
    }
}
export default MainJava;