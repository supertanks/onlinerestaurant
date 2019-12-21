import React, { Component } from 'react';
import DepartmentItem from './DepartmentItem/DepartmentItem';
import './Department.css';

class Department extends Component {
    render() {
        return (
            <div class = "department">
                <DepartmentItem 
                    image = {process.env.PUBLIC_URL + '/Image/department1.jpg'}
                    address = "123"
                    openningTime = "123"
                    phone = "123"
                />
                <DepartmentItem 
                    image = {process.env.PUBLIC_URL + '/Image/department2.jpg'}
                    address = "456"
                    openningTime = "456"
                    phone = "456"
                />
                <DepartmentItem 
                    image = {process.env.PUBLIC_URL + '/Image/department3.jpg'}
                    address = "789"
                    openningTime = "789"
                    phone = "789"
                />
            </div>
        );
    }
}

export default Department;