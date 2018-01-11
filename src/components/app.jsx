/*eslint-disable strict */

import React from 'react';
import Header from './common/header';
import { Switch, Route } from 'react-router-dom';
import Routes from '../routes';
import AuthorStore from '../stores/authorStore';
import InitializeActions from '../actions/initializeActions';


global.jQuery = global.$ = require('jquery');

class App extends React.Component {
    componentWillMount() {
        InitializeActions.initApp();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <Routes />
                </div>
            </div>
        );
    }
}

module.exports = App;