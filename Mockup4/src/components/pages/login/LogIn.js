import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../layouts/header/Header';
import '@fortawesome/fontawesome-free/js/all';
import './style.css';

class Login extends Component {
    /*NOT COMPLETED*/
    
    render() {
        const { isLoading } = this.state;
        return (
            <div className="login">
                <Header title="Log In" page="login" />
                <div className="maincontent">
                    <div className="login_title">Log In</div>
                    <div className="login_box">
                        <div style={{height: '20%'}}></div>
                        <button className="signin_button" onClick={() => this.signIn()}>
                            <span>Log In</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);