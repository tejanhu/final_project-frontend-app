import React, {Component} from 'react';
import Carousel from './carousel/carousel';
import Info from './info/Info';


class Home extends Component {

    render() {
        return (
            <div>
                <Carousel handleClick={this.props.handleClick}/>
                <Info />
            </div>
        );
    }

};
export default Home;