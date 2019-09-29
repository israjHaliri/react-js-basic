import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'

import Header from './FrontHeader';
import SideBar from './FrontSidebar';

import About from '../component/about';
import Error from '../component/error';

class FrontCommon extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home/about' component={About}></Route>
                    <Route path='/home/*' component={Error}></Route>
                </Switch>
                <SideBar />
            </div>
        )
    }
}

export default FrontCommon;
