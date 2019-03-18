import React, {Component} from 'react';
import {connect} from "react-redux";
import {logout} from "../services/auth-service";

const uri = {
    noUri: '#'
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this)
    }

    logout(e) {
        e.preventDefault();
        this.props.onLogout();
    }

    onToogleSidebar(e){
        e.preventDefault();
        if(document.body.classList.contains('sidebar-lg-show') === true){
            document.body.classList.remove("sidebar-lg-show");
        }else{
            document.body.classList.add("sidebar-lg-show");
        }
    }

    render() {
        return (
            <header className="app-header navbar">
                <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button"
                        data-toggle="sidebar-show">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href={uri.noUri}>
                    <img className="navbar-brand-full" src="/img/brand/logo.svg" width="89" height="25"
                         alt="CoreUI Logo"/>
                    <img className="navbar-brand-minimized" src="/img/brand/sygnet.svg" width="30" height="30"
                         alt="CoreUI Logo"/>
                </a>
                <button onClick={this.onToogleSidebar} className="navbar-toggler d-md-down-none" type="button"
                        data-toggle="sidebar-lg-show">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href={uri.noUri} role="button"
                           aria-haspopup="true" aria-expanded="false">
                            <img className="img-avatar" src="/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-header text-center">
                                <strong>Account</strong>
                            </div>
                            <button onClick={this.logout} className="dropdown-item">
                                <i className="fa fa-lock"></i> Logout
                            </button>
                        </div>
                    </li>
                </ul>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
  