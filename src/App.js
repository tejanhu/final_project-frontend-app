import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Logo</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Info</a>
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
        <p className="App-intro">

        </p>

          <div>
              <h1>content1</h1>
              <h1>content2</h1>
              <h1>content3</h1>
          </div>
          <section id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Info</a></li>
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Sign Up</a></li>*/}
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Login</a></li>*/}
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Contact</a></li>*/}
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            {/*<li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>*/}
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Info</a></li>*/}
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Sign Up</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Login</a></li>
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Contact</a></li>*/}
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            {/*<li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>*/}
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Info</a></li>*/}
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Sign Up</a></li>*/}
                            {/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Login</a></li>*/}
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a href="#"><i className="fas fa-adjust"></i></a></li>
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
                    <p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
                </div>

        </div>

        </div>
          </section>





      </div>

    );
  }
}

export default App;
