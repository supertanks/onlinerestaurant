import React, { Component } from 'react';
import './AppHeader.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class = "login-header">
				        <p class= "login-header-text">Đăng nhập / Đăng ký</p>
			        </div>
                    <div class = "menu-tab">
				        <img class= "restaurant-icon" src={process.env.PUBLIC_URL + '/Image/restaurant-icon.png'}/>
				        <div class = "restaurant-name-block">
					        <p class = "restaurant-name">Nhà hàng Tứ Phương</p>
				        </div>
				        <ul class = "head-function">
					        <li><div><strong>Trang Chủ</strong></div></li>
					        <li><div><strong>Giới Thiệu</strong></div></li>
					        <li><div><strong>Chi Nhánh</strong></div></li>
					        <li><div><strong>Thực Đơn</strong></div></li>
					        <li><div><strong>Đặt Hàng</strong></div></li>
					        <li><div><strong>Hỏi Đáp</strong></div></li>
				        </ul>
			        </div>
                </div>
            </div>
        );
    }
}

export default Header;