import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Books extends Component{


    render(){
        return(
            <div id="booksContent" class="container-fluid">
                <div className="jumbotron jumbotron-sm">
                    <div id="searchFunction">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit">Search
                            </button>
                        </form>
                    </div>
                    <div className="container">
                        <div className="row">


                            <div className="col-sm-12 col-lg-12">
                                <h1 className="h1">Books </h1>
                                </div>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div class="col-sm-4">
                                <span class="glyphicon glyphicon-signal logo"></span>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Books;