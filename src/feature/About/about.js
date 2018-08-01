import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component{


    render(){
        return(
            <div id="aboutUsInfo" class="container-fluid">
                <div className="jumbotron jumbotron-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h1 className="h1">
                                    About us </h1>
                                {/*<p>Code'mon is an arcade-like game intended for children ages 3 - 11.</p>*/}
                                <h4>Children in the UK have substantially less exposure to programming than many other countries. Code'mon is an arcade-like game intended for children ages 3 - 11 in the UK to help engage their interests in programming at an early age.</h4>
                            </div>
                            <div class="col-sm-4">
                                <span class="glyphicon glyphicon-signal logo"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jumbotron jumbotron-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h2>Our Values</h2>
                                <h4><strong>MISSION:</strong> Our mission is to expose children in the UK to programming at an early age introducing it in a fun and enjoyable way.</h4>
                                <h4><strong>VISION:</strong> Our vision is to drive the children in the UK to build the systems of the future of tomorrow.</h4>
                            </div>
                            <div className="col-sm-4">
                                <span className="glyphicon glyphicon-signal logo"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>







        );
    }
}

export default About;