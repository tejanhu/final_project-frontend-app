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


          <footer className="footer">
              <div className="container">
                  <span className="text-muted">© 2018 Copyright</span>
              </div>
          </footer>





      </div>

    );
  }
}

export default App;
