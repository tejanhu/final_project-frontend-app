import React, { Component } from 'react'

class Login extends Component{

    render(){
        return(
            <div className="main-container" id="login">

                <section className="space-sm">

                    <div className="row no-gutters justify-content-center">
                        <form className="text-left col-lg-8">
                            <div className="form-group">
                                <label htmlFor="login-email">Email Address</label>
                                <input className="form-control form-control-lg" type="email" name="email"
                                       id="login-email" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="login-password">Password</label>
                                <input className="form-control form-control-lg" type="password" name="password"
                                       id="login-password" placeholder="Enter a password"/>
                                <small>Forgot password? <a href="#">Reset here</a>
                                </small>
                            </div>
                            <div>
                                <div className="custom-control custom-checkbox align-items-center">
                                    <input type="checkbox" className="custom-control-input" value="box-1" name="box-1"
                                            id="check-remember"/>
                                    <label className="custom-control-label text-small" htmlFor="check-remember">Remember
                                        me next time</label>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-lg btn-primary">Log in</button>
                            </div>
                        </form>
                    </div>

                </section>

            </div>


        );
    }

}

export default Login;
