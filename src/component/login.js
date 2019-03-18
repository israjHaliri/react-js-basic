import React, { Component } from 'react';
import { auth } from "../services/auth-service";
import {connect} from "react-redux";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername(text) {
    this.setState({ username: text.target.value });
  }

  handlePassword(text) {
    this.setState({ password: text.target.value });
  }

    showLoading() {
        return (
            <div className="modal fade show" id="smallModal" tabIndex="-1" role="dialog"
                 style={{display: this.props.dataLoading}}
                 aria-labelledby="myModalLabel">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Loading</h4>
                        </div>
                        <div className="modal-body">
                            <p>Please wait…</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  render() {
    return (
      <div id="login-div" className="wrapper">
        {this.showLoading()}
        <div className="limiter">
          <div className="container-login100" >
            <div className="wrap-login100">
              <div className="login100-form validate-form">
                <span className="login100-form-logo">
                  <img id='img-logo' src="img/favicon.ico" alt="" />
                </span>
                  <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <input type="text" onChange={(text) => { this.handleUsername(text) }} className="input100"  placeholder="Username" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <input type="password"  onChange={(text) => { this.handlePassword(text) }} autoComplete="" className="input100"  placeholder="Password" />
                  </div>
                  <div className="container-login100-form-btn">
                    <button onClick={() => this.props.login(this.state.username, this.state.password)} className="btn btn-default btn-warnign text-uppercase align-items-center">Login</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        dataLoading: state.commonReducer
    }
};

const mapDispatchToProps = dispatch => {
  return {
      login: (username, password) => dispatch(auth(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
