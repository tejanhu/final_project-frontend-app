import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Glossary extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          words: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:8182/glossary/getAll")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                words: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        const { error, isLoaded, words } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (


            <div id="wordsContent" class="container-fluid">
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
                            <ul>
                            {this.state.words.map(word => (
                                <li key={word.keyword}>
                                {word.keyword} {word.definition}
                                </li>
                            ))}
                            </ul>
                            </div>
                            <div class="col-sm-4">
                                <span class="glyphicon glyphicon-signal logo"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    }
}

export default Glossary;