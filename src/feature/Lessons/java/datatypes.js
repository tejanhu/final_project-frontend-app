import React, { Component } from 'react';

class DataTypes extends Component {
    render () {
        return (
            <div id="datatypes" className="panel-collapse collapse in">
                <div className="panel-body">
                    <p>There are eight primitive datatypes supported by Java. Primitive datatypes are predefined by the language and named by a keyword. Let us now look into the eight primitive data types in detail.</p>
                    <ul>
                        <li><strong>byte</strong></li>
                        <li><strong>short</strong></li>
                        <li><strong>int</strong></li>
                        <li><strong>long</strong></li>
                        <li><strong>float</strong></li>
                        <li><strong>double</strong></li>
                        <li><strong>boolean</strong></li>
                        <li><strong>char</strong></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default DataTypes;