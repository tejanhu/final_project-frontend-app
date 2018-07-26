import React, { Component } from 'react';
import '../../App.css';
import ReactDOM from "react-dom";


class Footer extends Component{
    render(){
        return(
            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            {/*<h5>Quick links</h5>*/}
                            <ul className="list-unstyled quick-links">
                                <li><a onClick={this.handleGlossary}><i className="fa fa-angle-double-right"></i>Glossary</a></li>
                                <li><a onClick={this.handleAbout}><i className="fa fa-angle-double-right"></i>About Us</a></li>
                                <li><a onClick={() => this.props.handleClick("lessons")}><i className="fa fa-angle-double-right"></i>Lessons</a></li>
                                <li><a onClick={this.handleBooks}><i className="fa fa-angle-double-right"></i>Books</a></li>
                                <li><a onClick={this.handleLessons}><i className="fa fa-angle-double-right"></i>Lessons</a></li>
                                <li><a onClick={() => this.props.handleClick("books")}><i className="fa fa-angle-double-right"></i>Books</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            {/*<h5>Legal</h5>*/}
                            <ul className="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Terms & Conditions</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Privacy</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Sign Up</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Login</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            {/*<h5>Help</h5>*/}
                            <ul className="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQs</a></li>
                                <li><a onClick={this.handleContact}><i className="fa fa-angle-double-right"></i>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-envelope"></i></a></li>
                            </ul>
                        </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        {/*<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>*/}
                        <p className="h6">© 2018 Copyright All right Reversed.</p>
                    </div>
                </div>
            </div>
    </section>
        );
    }
}

export default Footer;