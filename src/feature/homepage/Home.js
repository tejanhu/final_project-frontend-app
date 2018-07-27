import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner/Banner';
import Carousel from './carousel/carousel'


class Home extends Component {

    render() {
        return (
            <div>
                <Carousel />
                <Banner handleClick={this.props.handleClick}/>
            </div>
        );
    }

};
export default Home;