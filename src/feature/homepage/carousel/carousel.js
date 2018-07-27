import React, {Component} from 'react';
import carousel1 from './carousel1.png';
import carousel2 from './carousel2.png';
import carousel3 from './carousel3.png';
import './carousel.css';

class Carousel extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} alt="Los Angeles" width="1100" height="500"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} alt="Chicago" width="1100" height="500"></img>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} alt="New York" width="1100" height="500"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        );
    }
}
export default Carousel;