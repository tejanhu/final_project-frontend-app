import React, {Component} from "react";

class Info extends Component {
    render() {
        return (
        <div className="jumbotron jumbotron-sm">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <h1 className="h1">
                            How to Play </h1>
                        <h4>Navigation:</h4>
                        <p>Use the arrow keys either on your keyboard or on the screen to navigate through the map</p>
                        <h4>Goal:</h4>
                        <p>You must travel through the land of Code'mon battling enemies each time a programming question appears.</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"/>
                    </div>
                </div>
            </div>
        </div>
        )}
}
export default Info;