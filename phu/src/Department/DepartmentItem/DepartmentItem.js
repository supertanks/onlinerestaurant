import React, { Component } from 'react';
import './DepartmentItem.css';

class DepartmentItem extends Component {
    render() {
        return (
            <div class = "departmentItem"> 
                <img src={this.props.image}/>
                <ul>
                    <li>Chi nhánh: {this.props.address} (địa chỉ)</li>
                    <li>Giờ mở cửa: {this.props.openningTime}</li>
                    <li>Số điện thoại: {this.props.phone} </li>
                </ul>
                <ul>
                    <li><div>Đặt bàn ngay</div></li>
                    <li><div>Đặt hàng ngay</div></li>
                </ul>
            </div>
        );
    }
}

export default DepartmentItem;