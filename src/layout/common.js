import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";
import  { Redirect } from 'react-router-dom'

import Header from './header';
import SideBar from './sidebar';

import Admin from '../component/admin';
import User from '../component/user';
import Error from '../component/error';

class Common extends Component {

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
        if(this.props.location.pathname === '/admin'){
            return <Redirect to='/admin/operator'  />
        }

        return (
            <div>
                <Header/>
                <div className="app-body">
                    <SideBar/>
                    <main className="main">
                        {this.showLoading()}
                        <Switch>
                            <Route path='/admin/operator' component={Admin}></Route>
                            <Route path='/admin/user' component={User}></Route>
                            <Route path='/admin/*' component={Error}></Route>
                        </Switch>
                    </main>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataLoading: state.commonReducer,
        login: state.loginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Common);
