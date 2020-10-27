import React, { Component } from 'react';
import HomeComponent from '../HomeComponent';
import AboutComponent from '../AboutComponent';
import ContactComponent from '../ContactComponent';
import ServicesComponent from '../ServicesComponent';
import { Route, Switch, Redirect } from "react-router-dom";
class RouterComponent extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/contact" component={ContactComponent} />
                <Route exact path="/services" component={ServicesComponent} />

                <Redirect to="/" />
            </Switch>
        );
    }
}

export default RouterComponent;
