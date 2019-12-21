import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../layouts/header/Header';
import './style.css';

class Profile extends Component {
    returnHome(){   
        var result = confirm('Bạn có chắc muốn rời khỏi trang này ?');
        alert(result);
        if(result==true){
            this.props.history.push('/home');
        }
    }
    async componentDidMount() {
        
    }
    getCreatedTime() {
        //ngày bắt đầu làm việc
    }
    
    render() {
        return (
            <div className="profile">
                <div className="header">
                        <button className="homebutton" title="Home" onClick = {() => this.returnHome()}>
                            <img src={logo} alt="" width={40} height={40} />
                        </button>
                        <span className="title">Tu Phuong Restaurant</span>
                </div>  
                <div className="maincontent">
                    <Header title="Thông tin người dùng" />
                        <div className="user_avatar">
                            <img src={localStorage.photoURL} alt="" width={200} height={200} style={{border: '2.5px white'}} />
                        </div>
                        <div className="user_info">
                            <span className="fullName_profile">Họ tên : {profile.name}</span>
                            <span className="phonenumber_profile">Số điện thoại : {profile.phonenumber}</span>  
                            <span className="address_profile">Địa chỉ : {profile.address}</span>  
                            <span className="id_profile">Mã nhân viên : {profile.id}</span>  
                            <span className="email_profile">Gmail : {profile.email}</span>  
                        </div>
                        <div className="start-working-time">    
                            Ngày bắt đầu làm việc: {this.getCreatedTime()} 
                        </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile);