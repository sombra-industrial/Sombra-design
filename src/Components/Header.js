import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Store from '../Pages/Store';
import Contacts from '../Pages/Contacts';
import NavbarMain from './NavbarMain';


const Header = () => {
    return (
        <div>
            <NavbarMain/>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/gallery' component={Gallery}/>
                    <Route exact path='/store' component={Store}/>
                    <Route exact path='/contacts' component={Contacts}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Header
