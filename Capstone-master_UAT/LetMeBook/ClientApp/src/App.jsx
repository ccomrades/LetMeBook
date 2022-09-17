import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
// import {Home } from './components/HomePage/Home';
import { Home } from './components/HomePage/Home';
// import  Doctor  from './components/DoctorsPage/Doctor';
import { Doctor } from './components/DoctorsPage/Doctor'
//import { MyDoctor } from './components/MyDoctor';
//import { Login } from './components/MyDoctor';
import Login from './components/LoginPage/Login';
import { DoctorBook } from '../src/components/DoctorBookPage/DoctorBook';
import { About } from './components/About/About';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/doctors' component={Doctor} />
                {/*<Route path='/mydoctor' component={MyDoctor} />*/}
                <Route path='/doctorBooking' component={DoctorBook} />
                <Route path='/login' component={Login} />
                <Route path='/about' component={About}/>
            </Layout>
        );
    }
}
