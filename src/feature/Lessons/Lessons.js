import React, { Component } from 'react';
import MainJava from './java/main';
import MainJavascript from "./javascript/main";
import MainPython from "./python/main";
import './lessons.css';

class Lessons extends Component{

    render(){
        return(
            <div id="aboutUsInfo" class="container-fluid">
                <div className="jumbotron jumbotron-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h1 className="h1">Lessons</h1>
                                <p>Here you can learn more about a variety of different programming languages!</p>
                                <div className="panel-group" id="accordion">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="link list-group-item" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Java</a>
                                            </h4>
                                        </div>
                                        <div id="collapse1" className="panel-collapse collapse in"><MainJava /></div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="link list-group-item" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Javascript</a>
                                            </h4>
                                        </div>
                                        <div id="collapse2" className="panel-collapse collapse">
                                            <div className="panel-body"><MainJavascript /></div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="link list-group-item" data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                                    Python</a>
                                            </h4>
                                        </div>
                                        <div id="collapse3" className="panel-collapse collapse">
                                            <div className="panel-body"><MainPython /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <span className="glyphicon glyphicon-signal logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lessons;