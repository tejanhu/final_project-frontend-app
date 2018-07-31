import React, { Component } from 'react';

class ObjAndClass extends Component {
    render () {
        return (
            <div id="objandclass" className="panel-collapse collapse in">
                <div className="panel-body">
                    <p>In this chapter, we will look into the concepts - Classes and Objects.</p>
                    <ul>
                        <li><strong>Object</strong> − Objects have states and behaviors. Example: A dog has states - color, name, breed as well as behaviors – wagging the tail, barking, eating. An object is an instance of a class.</li>
                        <li><strong>Class</strong> − A class can be defined as a template/blueprint that describes the behavior/state that the object of its type support.</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default ObjAndClass;