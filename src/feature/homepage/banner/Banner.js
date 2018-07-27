import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Game from "../../game/Game";

class Banner extends Component {

    handleGame(){
        ReactDOM.render(<Game/>, document.getElementById("body"));
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Code'mon</h1>
                    <p>Brief desciprtion of product.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => this.props.handleClick("game")}>Play now! &raquo;</a></p>
                </div>
            </div>
        );
    }
}

export default Banner;