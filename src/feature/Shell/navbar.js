import React, { Component } from 'react';
import Contact from "../Contact/contact";
import About from "../About/about";
import ReactDOM from 'react-dom';
import Home from '../homepage/Home';


class Navbar extends Component{

    handleHome(){
        ReactDOM.render(<Home/>, document.getElementById("body"));
    }

    handleContact(){
        ReactDOM.render(<Contact/>, document.getElementById("body"));
    }

    handleAbout(){
        ReactDOM.render(<About/>, document.getElementById("body"));
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" onClick={this.handleHome}>Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={this.handleHome}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" onClick={this.handleAbout}>About</a>
                                <a className="dropdown-item" onClick={this.handleContact}>Contact</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com"
                               id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false">
                                Learn
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Glossary</a>
                                <a className="dropdown-item" href="#">Books</a>
                                <a className="dropdown-item" href="#">Lessons</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;