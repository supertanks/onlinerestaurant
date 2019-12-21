import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
			<div>
				<div class = "introduce-tab">
					<p class="introduce"><img src={process.env.PUBLIC_URL + '/Image/restaurant-picture.jpg'}/>Thương hiệu nhà hàng Tứ Phương sau một thời gian dài không ngừng phát triển đã sở hữu một chuỗi các nhà hàng chi nhánh trên địa bàn thánh phố Hà Nội</p>
				</div>
				<div class = "introduce-tab2">
					<p class = "introduce2"><img src={process.env.PUBLIC_URL + '/Image/dessert-picture.jpg'}/>Ẩm thực Việt Nam là cách gọi của phương thức chế biến món ăn, nguyên lý pha trộn gia vị và những thói quen ăn uống nói chung của mọi người Việt trên đất nước Việt Nam. Tuy hầu như có ít nhiều có sự khác biệt, ẩm thực Việt Nam vẫn bao hàm ý nghĩa khái quát nhất để chỉ tất cả những món ăn phổ biến trong cộng đồng các dân tộc thiểu số nhưng đã tương đối phổ thông trong cộng đồng người Việt.</p>
				</div>
				<div class="restaurant-string">
					<p><strong>Hệ thống nhà hàng chi nhánh</strong></p>
				</div>
				<div class = "department-list-tab">
					<div class = "department-list">
						<img src = {process.env.PUBLIC_URL + '/Image/department1.jpg'}/>
						<p>Chi Nhánh 1: ... (địa chỉ)</p>
						<p><strong>Đặt bàn ngay</strong></p>
					</div>
					<div class = "department-list">
						<img src = {process.env.PUBLIC_URL + '/Image/department2.jpg'}/>
						<p>Chi Nhánh 2: ... (địa chỉ)</p>
						<p><strong>Đặt bàn ngay</strong></p>
					</div>
					<div class = "department-list">
						<img src = {process.env.PUBLIC_URL + '/Image/department3.jpg'}/>
						<p>Chi Nhánh 3: ... (địa chỉ)</p>
						<p><strong>Đặt bàn ngay</strong></p>
					</div>
				</div>
			</div>	
	    );
    }
}

export default Introduction;