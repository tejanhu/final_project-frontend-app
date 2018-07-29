import React, {Component} from 'react';
import Carousel from './carousel/carousel'


class Home extends Component {

    render() {
        return (
            <div>
                <Carousel handleClick={this.props.handleClick}/>
            </div>
        );
    }

};
export default Home;