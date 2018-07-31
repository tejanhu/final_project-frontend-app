import React, {Component} from 'react';
import carousel1 from './carousel1.png';
import carousel2 from './carousel2.png';
import carousel3 from './carousel3.png';
import logo from './logo.png';
import './carousel.css';
import ReactDOM from "react-dom";
import Game from "../../game/Game";

class Carousel extends Component {

    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active" />
                    <li data-target="#demo" data-slide-to="1" />
                    <li data-target="#demo" data-slide-to="2" />
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} alt="Image 1" width="1100" height="500" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} alt="Image 2" width="1100" height="500" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} alt="Image 3" width="1100" height="500" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
                <div className="carousel-caption">
                    <img className="logo" id="logo" src={logo} alt="logo" />
                    <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => this.props.handleClick("game")}>Play now! &raquo;</a></p>
                </div>
            </div>
        );
    }
}
export default Carousel;