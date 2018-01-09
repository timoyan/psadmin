"use strict";

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect from='/about-us' to='/about' />
                <Route exact path='/' component={require('./components/homePage')} />
                <Route exact path='/authors' component={require('./components/authors/authorPage')} />
                <Route exact path='/about' component={require('./components/about/aboutPage')} />

                <Route component={require('./components/notFoundPage')} />
            </Switch>
        );
    }
}

module.exports = Routes;