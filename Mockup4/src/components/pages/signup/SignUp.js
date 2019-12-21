
import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
//import logo background
import './style.css';
class SignUp extends Component {
    returnHome(){   
        var result = confirm('Bạn có chắc muốn rời khỏi trang này ?');
        alert(result);
        if(result==true){
            this.props.history.push('/home');
        }
    }
    openSignIn(){
        this.props.history.push('/signin');
    }
    render() { 
        return (
            <div className="register">
                <div className="header">
                    <button className="homebutton" title="Home" onClick = {() => this.returnHome()}>
                        <img src={logo} alt="" width={40} height={40} />
                    </button>
                    <span className="title">Tu Phuong Restaurant</span>
                </div>
                <div className="maincontent">
                    <div className="signup_title">Sign Up</div>
                    <div className="signup_form">
                        <img src={logo2} alt="" style={{position: 'relative', width: '250px', margin: '0 auto', marginTop: '20px'}} />
                        <form className="signup_input" style={{position: 'relative', marginTop: '30px'}} action="#" method="post">
                            <div className="form-group">
                                <label>User Name :</label>
                                <div style={{width: '70%'}}>
                                    <div className="form-control">
                                        <input type="text" placeholder="Username" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password :</label>
                                <div style={{display: 'flex', justifyContent: 'space-between', width: '70%'}}>
                                    <div className="form-control" style={{width: '38%'}}>
                                        <input type="password" placeholder="Password" required />
                                    </div>
                                    <div className="form-control" style={{width: '38%'}}>
                                        <input type="password" placeholder="Checked Password" required />
                                    </div>
                                </div>
                            </div><div className="form-group">
                                <label>Họ và tên :</label>
                                <div style={{width: '70%'}}>
                                    <div className="form-control">
                                        <input type="text" placeholder="Full name" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại :</label>
                                <div style={{width: '70%'}}>
                                    <div className="form-control">
                                        <input type="tel" placeholder="Phone Number" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ :</label>
                                <div style={{width: '70%'}}>
                                    <div className="form-control">
                                        <input type="text" placeholder="Address" required />
                                    </div>
                                </div>  
                            </div>
                            <div className="form-group">
                                <label>Your Email:</label>
                                <div style={{width: '70%'}}>
                                    <div className="form-control">
                                        <input type="email" placeholder="Enter email" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">New User</div>
                            <button className="signup_button">Sign Up!</button>
                        </form>	
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(SignUp);