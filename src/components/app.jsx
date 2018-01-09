/*eslint-disable strict */

import React from 'react';
import Header from './common/header';
import { Switch, Route } from 'react-router-dom';
import Routes from '../routes';

global.jQuery = global.$ = require('jquery');

class App extends React.Component {
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