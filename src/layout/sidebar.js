import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to='/admin'>
                                <i className="nav-icon icon-speedometer"></i> Admin
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to='/events'>
                                <i className="nav-icon icon-speedometer"></i> Events
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
