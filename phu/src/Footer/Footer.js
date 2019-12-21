import React, { Component } from 'react';
import './AppFooter.css';

class Footer extends Component {
    render() {
        return (
            <div>
               <div class="information">
                  <img class= "restaurant-icon" src={process.env.PUBLIC_URL + '/Image/restaurant-icon.png'}/>
                  <div class = "restaurant-name-block">
                      <p class = "restaurant-name">Nhà hàng Tứ Phương</p>
                  </div>
                  <div class="followus">
                      <p><strong>Follow us</strong></p>
                      <img class="icon" src={process.env.PUBLIC_URL + '/Image/fb-icon.jpg'}/>
                      <img class="icon" src={process.env.PUBLIC_URL + '/Image/ig-icon.jpg'}/>
                  </div>
                  <div class="feedback">
                      <p><strong>For feedback</strong></p>
                      <img class="icon" src={process.env.PUBLIC_URL + '/Image/gm-icon.jpg'}/>
                      <p>nhahangtuphuong@gmail.com</p>
                  </div>
                  <div class="contact">
                      <p><strong>For contact</strong></p>
                      <img class="icon" src={process.env.PUBLIC_URL + '/Image/phone-icon.jpg'}/>
                      <p>0356124235</p>
                  </div>
               </div>
            </div>
        );
    }
}

export default Footer;