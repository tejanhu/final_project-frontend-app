import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Books extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          books: [],
          searchValue: "programming"
        };
      }

      fetchBooks(){
        fetch(`http://localhost:8182/book/search/${this.state.searchValue}`)
        .then(res => res.json())
        .then(
          (result) => {
              this.setState({
                  isLoaded: true,
                  books: result
              });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      }

      performSearch(event) {
          if(event.key === 'Enter' ){
            event.preventDefault();
            if(event.target.value === ""){
                return;
            }
     
            this.setState({
                searchValue: event.target.value
            }, () => {
                this.fetchBooks()
            });
    

          }
    }
    
      componentDidMount() {
        fetch("http://localhost:8182/book/search/programming")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                books: result
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
        const { error, isLoaded, books } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (


            <div id="booksContent" class="container-fluid">
                <div className="jumbotron jumbotron-sm">
                    <div id="searchFunction">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search" onKeyPress={event => this.performSearch(event)}/>
                        </form>
                    </div>
                    <div className="container">
                        <div className="row">


                            <div className="col-sm-12 col-lg-12">
                            <table className="table table-striped">
                                    <th>Name</th>
                                    <th>Author</th>
                                {this.state.books.map(book => (
                                    <tr key={book.name}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                    </tr>
                                ))}
                                </table>
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

export default Books;