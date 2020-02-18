import React, { Component } from 'react'
import "./LoginPage.scss";
import {InputText} from 'primereact/inputtext';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Redirect } from 'react-router';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            password: ""
        }
    }

    handleOnClick = () => {
        // some action...
        // then redirect
        this.setState({redirect: true});
      }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/register" />;
          }
        return (
            <React.Fragment>
                <div className="navbar-header">
                    Login
                </div>
                <div class="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4"></div>
                    <div className="col-md-4 col-lg-4">

                    <div className="form-group"></div>
                    <div className="form-group">
                    <span className="p-float-label">
                        <InputText id="in" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                        <label htmlFor="in">Username or Email Address</label>
                    </span>
                    </div>

                    <div className="form-group">
                    <span className="p-float-label">
                        <InputText id="in" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                        <label htmlFor="in">Password</label>
                    </span>
                    </div>

                    <div className="form-group">
                        <span className="p-float-label submit-btn">
                            <button type="submit" className="btn btn-default">Submit</button>
                        </span>
                    </div>

                    <div className="form-group">
                        <span className="p-float-label submit-btn">
                            Not registered yet? Register Now
                        </span>
                    </div>

                    <div className="form-group">
                        <span className="p-float-label submit-btn">
                            <button type="submit" className="btn btn-default" onClick={this.handleOnClick}>Register</button>
                        </span>
                    </div>
                   
                    {/* <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
                        </div>

                        <span className="p-float-label">
    <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Username</label>
</span>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile"/>
                            <p className="help-block">Example block-level help text here.</p>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input type="checkbox"></input>Check me Out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                        </form> */}
                    </div>
                </div>
</div>

                
            </React.Fragment>

        )
    }
}

export default LoginPage;