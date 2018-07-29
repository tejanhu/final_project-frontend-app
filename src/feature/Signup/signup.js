import React, { Component } from 'react'

class Signup extends Component{

    render(){
        return(
            <form>
                <div className="form-row form-group">
                    <div className="col">
                        <input className="form-control form-control-lg" type="text" id="firstname"
                               placeholder="First Name"/>
                    </div>
                    <div className="col">
                        <input className="form-control form-control-lg" type="text" id="lastname"
                               placeholder="Last Name"/>
                    </div>
                </div>
                <div className="form-row form-group">
                    <div className="col">
                        <input className="form-control form-control-lg" type="email" id="email"
                               placeholder="Email Address"/>
                    </div>
                </div>
                <div className="form-row form-group">
                    <div className="col">
                        <input className="form-control form-control-lg" type="password" id="password"
                               placeholder="Password"/>
                        <small>Password must be at least 7 characters</small>
                    </div>
                </div>
                <div className="form-row form-group">
                    <div className="col">
                        <button className="btn btn-block btn-success btn-lg" type="submit">Create Account</button>
                    </div>
                </div>
                <div className="text-center">
                    <span className="text-small text-muted">By clicking 'Create Account' you agree to our <a
                        href="#">Terms and Condition</a>
                    </span>
                </div>
            </form>

        );
    }

}

export default Signup;