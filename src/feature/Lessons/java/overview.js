import React, { Component } from 'react';
import {JAVA_OVERVIEW} from '../../../config/Constants';


class Overview extends Component {
    render () {
        return (
            <div id="overview" className="panel-collapse collapse in">
                <div className="panel-body">
                    {JAVA_OVERVIEW}
                </div>
            </div>
        );
    }
}
export default Overview;