import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './components/pages/login/LogIn';
import SignUp from './pages/signup/SignUp';
import Profile from './pages/profile/Profile';
import Menu from './pages/menu/Menu';
import Department from './pages/department/Department';
import Order from './pages/order/Order';


function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => localStorage.uid ? (children) : (<Redirect to='/signin' />)}
        />
    );
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/home">
                        <Home />
                    </Route>
                    <Route exact path = '/login'>
                        <Login />
                    </Route>
                    <Route exact path = '/signup'>
                        <SignUp />
                    </Route>
                    <PrivateRoute exact path ='/profile'>
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute exact path ='/menu'>
                        <Menu />
                    </PrivateRoute>
                    <PrivateRoute exact path ='/department'>
                        <Department />
                    </PrivateRoute>
                    <PrivateRoute exact path ='/order'>
                        <Order />
                    </PrivateRoute>
                    <PrivateRoute exact path ='/book'>
                        <Book />
                    </PrivateRoute>
                    <Route exact path="/" render={() => <Redirect to='/home' />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

