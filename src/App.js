import React, { Component } from 'react';
import Navbar from "./navbar.js";
import Body from "./body.js";
import Footer from "./footer.js";

class App extends Component {



  render() {
    return (
        <div>
            <Navbar/>

            <Body/>

            <Footer/>
        </div>


    );
  }

}

export default App;
