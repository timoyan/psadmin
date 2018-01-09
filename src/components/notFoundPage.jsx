"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whoops! Sorry, there is nothing to see here.</p>
                <h3>No match for <code>{this.props.location.pathname}</code></h3>
                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
}

module.exports = NotFoundPage;
