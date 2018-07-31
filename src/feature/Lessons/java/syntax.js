import React, { Component } from 'react';

class Syntax extends Component {
    render () {
        return (
            <div id="syntax" className="panel-collapse collapse in">
                <div className="panel-body">
                    <p>When we consider a Java program, it can be defined as a collection of objects that communicate via invoking each other's methods. Let us now briefly look into what do class, object, methods, and instance variables mean.</p>
                    <ul>
                        <li><strong>Object</strong> − Objects have states and behaviors. Example: A dog has states - color, name, breed as well as behavior such as wagging their tail, barking, eating. An object is an instance of a class.</li>
                        <li><strong>Class</strong> − A class can be defined as a template/blueprint that describes the behavior/state that the object of its type supports.</li>
                        <li><strong>Methods</strong> − A method is basically a behavior. A class can contain many methods. It is in methods where the logics are written, data is manipulated and all the actions are executed.</li>
                        <li><strong>Instance Variables</strong> − Each object has its unique set of instance variables. An object's state is created by the values assigned to these instance variables.</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Syntax;