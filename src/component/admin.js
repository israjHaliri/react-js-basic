import React, {Component} from 'react';
import {connect} from "react-redux";
import {addAdmin, fetchAdminList, saveAdmin} from "../services/admin-service";
import {addAdminClearData, addNewValueAdmin, cancelEditAdmin, editAdmin, newValueAdmin} from "../actions/admin-creator";
import {ADMIN_CANCEL_EDIT} from "../actions/action-types";

export class Admin extends Component {

    constructor(args) {
        super(args);

        this.state = {
            loggedInAccount: localStorage.getItem('current-username'),
        };
    }

    componentWillMount() {
        this.props.dispatch({ type: ADMIN_CANCEL_EDIT });
    }

    componentDidMount() {
        this.props.dispatch(fetchAdminList());
    }

    getReadAdmin = (admin, i) => {
        return (
            <tr key={admin.key}>
                <td>{i + 1}</td>
                <td>{admin.username}</td>
                <td>{admin.fullname}</td>
                <td>{admin.active ? 'active' : 'inactive'}</td>
                <td>
                    {!this.props.editAdminData.isEdit && <div className="btn btn-warning" onClick={() => this.props.editAdmin(admin)}>Edit</div> }
                    {this.props.editAdminData.isEdit && <div className="btn btn-warning disabled" >Edit</div> }
                </td>
            </tr>
        )
    };

    getTableContent = (adminList = []) => {
        return (
            <tbody>
            {adminList.map((admin, i) => {
                return this.getReadAdmin(admin, i);
            })}
            </tbody>
        )
    };

    onSaveAdmin = () => {
        const { newPassword, newPasswordConfirm } = this.props.editAdminData;

        if ( newPassword === newPasswordConfirm ) {
            this.props.saveAdmin();
        } else {
            alert('Make sure your new password confirmation same');
        }
    };

    getAdminEditForm = () => {
        return (
            <div>
            <div className="card">
                <div className="card-header">
                    <strong>Edit Admin</strong> Form
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label">Username</label>
                        <div className="col-md-9">
                            <div> {this.props.editAdminData.username} </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label">Full name</label>
                        <div className="col-md-9">
                            <input value={this.props.editAdminData.fullname}
                                   onChange={e => this.props.adminFormChange('fullname', e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label">Active</label>
                        <div className="col-md-9">
                            {
                                this.state.loggedInAccount === this.props.editAdminData.username &&
                                    <div> active </div>
                            }
                            {
                                this.state.loggedInAccount !== this.props.editAdminData.username &&
                                    <select value={this.props.editAdminData.active}
                                            onChange={e => this.props.adminFormChange('active', e.target.value)}>
                                        <option value='true'>active</option>
                                        <option value='false'>inactive</option>
                                    </select>
                            }

                        </div>
                    </div>
                </div>
            </div>
                <div className="card">
                    <div className="card-body">
                        {
                            this.state.loggedInAccount === this.props.editAdminData.username &&
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Old Password</label>
                                    <div className="col-md-9">
                                        <input value={this.props.editAdminData.password} type="password"
                                               onChange={e => this.props.adminFormChange('oldPassword', e.target.value)}/>
                                    </div>
                                </div>
                        }
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">New Password</label>
                            <div className="col-md-9">
                                <input value={this.props.editAdminData.newPassword} type="password"
                                       onChange={e => this.props.adminFormChange('newPassword', e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">New Password Confirmation</label>
                            <div className="col-md-9">
                                <input value={this.props.editAdminData.newPasswordConfirm} type="password"
                                       onChange={e => this.props.adminFormChange('newPasswordConfirm', e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button onClick={this.onSaveAdmin} style={{marginRight: '5px'}} className="btn btn-sm btn-primary" type="submit">
                            <i className="fa fa-dot-circle-o"></i> Submit
                        </button>
                        <button onClick={this.props.cancelEdit} className="btn btn-sm btn-danger"
                                type="reset">
                            <i className="fa fa-ban"></i> Cancel
                        </button>
                    </div>
            </div>
        </div>
        )
    };

    getAddAdminForm = () => {
        return (<div className="card">
            <div className="card-header">
                <strong>Add New Admin</strong> Form
            </div>
            <div className="card-body">
                <div className="form-group row">
                    <label className="col-md-3 col-form-label" htmlFor="file-input">Username</label>
                    <div className="col-md-9">
                        <input value={this.props.newAdminData.username}
                               onChange={e => this.props.addAdminFormChange('username', e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label" htmlFor="file-input">Full name</label>
                    <div className="col-md-9">
                        <input value={this.props.newAdminData.fullname}
                               onChange={e => this.props.addAdminFormChange('fullname', e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label" htmlFor="file-input">Password</label>
                    <div className="col-md-9">
                        <input value={this.props.newAdminData.password} type="password"
                               onChange={e => this.props.addAdminFormChange('password', e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label" htmlFor="file-input">Password Confirmation</label>
                    <div className="col-md-9">
                        <input value={this.props.newAdminData.passwordConfirm} type="password"
                               onChange={e => this.props.addAdminFormChange('passwordConfirm', e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button onClick={() => {
                  this.props.addNewAdmin()
                }} style={{marginRight: '5px'}} className="btn btn-sm btn-primary" type="submit">
                    <i className="fa fa-dot-circle-o"></i> Submit
                </button>
                <button onClick={this.props.clearAddAdminForm} className="btn btn-sm btn-danger"
                        type="reset">
                    <i className="fa fa-ban"></i> Reset
                </button>
            </div>
        </div>
        )
    }

    render() {
        return (
            <div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item">Admin</li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                <div className="container-fluid">
                    {this.getAddAdminForm()}
                    {this.props.editAdminData.isEdit && this.getAdminEditForm()}
                    <div className="card card-body dataTables_wrapper dt-bootstrap4 no-footer">
                        <table className="table table-striped table-bordered datatable dataTable no-footer">
                            <thead>
                            <tr>
                                <th scope="col">no</th>
                                <th scope="col">username</th>
                                <th scope="col">fullname</th>
                                <th scope="col">active</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            {this.getTableContent(this.props.adminList, this.props.editAdminData)}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        adminList: state.adminReducer,
        editAdminData: state.editAdminReducer,
        newAdminData: state.addAdminReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editAdmin: selectedAdmin => dispatch(editAdmin(selectedAdmin)),
        adminFormChange: (type, eventValue) => dispatch(newValueAdmin(type, eventValue)),
        saveAdmin: () => dispatch(saveAdmin()),
        cancelEdit: () => dispatch(cancelEditAdmin()),
        addAdminFormChange: (type, eventValue) => dispatch(addNewValueAdmin(type, eventValue)),
        clearAddAdminForm: () => dispatch(addAdminClearData()),
        addNewAdmin: () => dispatch(addAdmin()),
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
