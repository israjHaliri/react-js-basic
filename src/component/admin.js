import React, {Component} from 'react';
import {connect} from "react-redux";
import {getData, postData, putData} from "../services/admin-service";

export class Admin extends Component {

  constructor(args) {
    super(args);

    this.state = {
      loggedInAccount: localStorage.getItem('current-username'),
      username: '',
      password: ''
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getData());
  }

  callback(obj) {
    console.log("save : ",(obj));
  }

  getContentList = (admin, i) => {
    return (
      <tr key={admin.id}>
        <td>{admin.id}</td>
        <td>{admin.first_name}</td>
        <td>{admin.last_name}</td>
        <td>
          <div className="btn btn-warning" onClick={() => this.props.putData(admin)}>Edit</div>
        </td>
      </tr>
    )
  };

  getTableContent = (adminList = []) => {
    return (
      <tbody>
      {adminList.map((admin, i) => {
        return this.getContentList(admin, i);
      })}
      </tbody>
    )
  };

  onSaveAdmin = () => {
    this.props.postData(this.state, this.callback);
  };

  handleFirstname(text) {
    this.setState({ username: text.target.value });
  }

  handleLastname(text) {
    this.setState({ username: text.target.value });
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
      <div className="wrapper">
        {this.showLoading()}
        <div className="card">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item">Admin</li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="container-fluid">
            <div className="card">
              <div className="card-header">
                <strong>Add</strong> Form
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="col-md-3 col-form-label">First Name</label>
                    <input className="col-md-3 col-form-label" type="text" type="text" onChange={(text) => { this.handleFirstname(text) }}/>
                </div>
                <div className="form-group">
                  <label className="col-md-3 col-form-label">Last Name</label>
                    <input className="col-md-3 col-form-label" type="text" type="text" onChange={(text) => { this.handleLastname(text) }}/>
                </div>
                <div className="container-login100-form-btn">
                  <button onClick={() => this.onSaveAdmin()} className="btn btn-default btn-warnign text-uppercase align-items-center">Save</button>
                </div>
              </div>
            </div>
            <div className="card card-body dataTables_wrapper dt-bootstrap4 no-footer">
              <table className="table table-striped table-bordered datatable dataTable no-footer">
                <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">username</th>
                  <th scope="col">fullname</th>
                  <th scope="col"></th>
                </tr>
                </thead>
                {this.getTableContent(this.props.adminReducer)}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    adminReducer: state.adminReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postData: (parameter, callback) => dispatch(postData(parameter, callback)),
    putData: (parameter) => dispatch(putData(parameter)),
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
