import React, {Component} from 'react';

export class User extends Component {

  constructor(args) {
    super(args);

    this.state = {
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item">User</li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>
      </div>
    )
  }
}

export default User;
