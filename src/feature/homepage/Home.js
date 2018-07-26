import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner/Banner';


class Home extends Component {

    render() {
        return (
            <div>
                <Banner handleClick={this.props.handleClick}/>
            </div>
        );
    }

};
export default Home;