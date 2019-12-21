import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
            <div class ="newdish-discount">
                   <div class ="newdish-discount-text"><p><strong>Món mới/ Khuyến mãi</strong></p></div>
                   
                   <ul class="newdish">
                       <li><img src={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}/></li>
                       <li><img src={process.env.PUBLIC_URL + '/Image/newdish2.jpg'}/></li>
                       <li><img src={process.env.PUBLIC_URL + '/Image/newdish3.jpg'}/></li>
                   </ul>
               </div>	
               <div class ="menu-list">
                   <div class ="menu-list-text"><p><strong>Thực đơn</strong></p></div>
                   <ul class="menupicture">
                       <li><div><img src={process.env.PUBLIC_URL + '/Image/appetizer-picture.jpg'}/><p><strong>Khai vị</strong></p></div></li>
                       <li><div><img src={process.env.PUBLIC_URL + '/Image/maindish-picture.jpg'}/><p><strong>Món chính</strong></p></div></li>
                       <li><div><img src={process.env.PUBLIC_URL + '/Image/dessert-picture.jpg'}/><p><strong>Tráng miệng</strong></p></div></li>
                       <li><div><img src={process.env.PUBLIC_URL + '/Image/daily-picture.jpg'}/><p><strong>Theo ngày</strong></p></div></li>
                   </ul>
               </div>
               
               <div class = "introduce-tab">
                   
                   <img class="restaurant-picture" src={process.env.PUBLIC_URL + '/Image/restaurant-picture.jpg'}/>
                   <p class="introduce">Thương hiệu nhà hàng Tứ Phương sau một thời gian dài không ngừng phát triển đã sở hữu một chuỗi các nhà hàng chi nhánh trên địa bàn thánh phố Hà Nội</p>
                   <p class="readmore">Xem thêm</p>
               </div>
           </div>
        );
    }
}

export default Main;