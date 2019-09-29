import React, { Component } from 'react';
import Header from '../layout/FrontHeader';
import SideBar from '../layout/FrontSidebar';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      <Header/>
      <p>Home</p>
      <SideBar/>
      </React.Fragment>
    )
  }
}

export default Home
