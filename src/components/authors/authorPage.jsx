"use strict";

import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';
import { Prompt, Link } from 'react-router-dom';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] };
    }

    componentDidMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="/authors/add" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = Authors;