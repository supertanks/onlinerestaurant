import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all';
import './style.css';


class Department extends Component {
    returnHome(){   
        var result = confirm('Bạn có chắc muốn rời khỏi trang này ?');
        alert(result);
        if(result==true){
            this.props.history.push('/home');
        }
    }
    render() { 
        return (
            <div className="department">
                <div className="header">
                    <button className="homebutton" title="Home" onClick = {() => this.returnHome()}>
                        <img src={logo} alt="" width={40} height={40} />
                    </button>
                    <span className="title">Tu Phuong Restaurant</span>
                </div>

                
            </div>
        );
    }
}
 
export default withRouter(Department);