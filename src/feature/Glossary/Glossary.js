import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Glossary extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          words: [],
          allWords: []
        };
      }

      

        filterList(event) { 
            var updatedList = this.state.allWords;
            updatedList = updatedList.filter(function(word){
                return (word.keyword).toLowerCase().search(event.target.value.toLowerCase()) !== -1;
            }); 
            this.setState({words: updatedList});
        }
      
    
      componentDidMount() {
        fetch("http://localhost:8182/glossary/getAll")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                allWords: result
              });
              this.setState({
                  words: this.state.allWords
              })
            },
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


            <div id="wordsContent" className="container-fluid">
                <div className="jumbotron jumbotron-sm">
                    <div id="searchFunction">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                            aria-label="Search" onChange={this.filterList.bind(this)}/>
                        </form>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <table className="table table-striped">
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>{this.state.words.map(word => (
                                <tr key={word.keyword}>
                                    <td>{word.keyword}</td>
                                    <td>{word.definition}</td>
                                </tr>
                                ))}
                                </table>
                            </div>
                            <div class="col-sm-4">
                                <span className="glyphicon glyphicon-signal logo"></span>
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