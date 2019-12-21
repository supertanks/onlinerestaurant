import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
    render() {
        return (
            <div class = "menuItem">
                <img src={this.props.image}/>
                <ul>
                    <li>Tên món: {this.props.dishName}</li>
                    <li>Giá tiền: {this.props.price}</li>
                </ul>
            </div>
        );
    }
}

export default MenuItem;