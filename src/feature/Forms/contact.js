import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contact extends Component{


    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h1 className="h1">
                                    Contact us <small>Feel free to contact us</small></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-8">
                            <div className = "well well-sm">
                                <form>
                                <div className = "row">
                                    <div className = "col-md-6">
                                        <div className = "form-group">
                                            <label htmlFor = "name"> Name </label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required"/>
                                        </div>
            <div className="form-group">
                <label htmlFor="email">
                    Email Address</label>
                <div className="input-group">
                                    <span className="input-group-addon"><span
                                        className="glyphicon glyphicon-envelope"></span>
                                    </span>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required="required"/>
                </div>
            </div>

            <div class="form-group">
                <label for="subject">
                Subject</label>
                <select id="subject" name="subject" class="form-control" required="required">
                    <option value="na" selected="">Choose One:</option>
                    <option value="service">General Customer Service</option>
                    <option value="suggestions">Suggestions</option>
                    <option value="product">Product Support</option>
                </select>
                </div>
        </div>

        <div class="col-md-6">
                <div class="form-group">
                <label for="name">
                Message</label>
                <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                          placeholder="Message"></textarea>
                </div>
        </div>
        <div class="col-md-12">
                <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                Send Message</button>
        </div>
        </div>
        </form>
        </div>
        </div>

        </div>
    </div>
            </div>


        );
    }
}

export default Contact;