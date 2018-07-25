import React, { Component } from 'react';
import './App.css';

class Footer extends Component{



    render(){
        return(
            <section id="footer">
                <div class="container">
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Info</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Sign Up</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Login</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i>Glossary</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Info</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Sign Up</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Login</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Glossary</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Info</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Sign Up</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Login</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Glossary</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul class="list-unstyled list-inline social text-center">
                                <li class="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-google-plus"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-envelope"></i></a></li>
                            </ul>
                        </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        {/*<p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>*/}
                        <p class="h6">© 2018 Copyright All right Reversed.</p>
                    </div>
                </div>
            </div>
    </section>
        );
    }
}

export default Footer;