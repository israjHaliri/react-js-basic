import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div style={{paddingTop:'250px'}}>
                                <h1 className="float-left display-3 mr-4">404</h1>
                                <h4 className="pt-3">Sorry, we have a problem!</h4>
                                <p className="text-muted">The page you are looking for is temporarily unavailable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}