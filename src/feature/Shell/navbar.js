import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Navbar extends Component{
    

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" onClick={() => this.props.handleClick("home")}>Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => this.props.handleClick("home")}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" onClick={() => this.props.handleClick("game")}>Game <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" onClick={() => this.props.handleClick("about")}>About</a>
                                <a className="dropdown-item" onClick={() => this.props.handleClick("contact")}>Contact</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com"
                               id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false">
                                Learn
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" onClick={() => this.props.handleClick("lessons")}>Lessons</a>
                                <a className="dropdown-item" onClick={() => this.props.handleClick("glossary")}>Glossary</a>
                                <a className="dropdown-item" onClick={() => this.props.handleClick("books")}>Books</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => this.props.handleClick("signup")}>Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => this.props.handleClick("login")}>Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;