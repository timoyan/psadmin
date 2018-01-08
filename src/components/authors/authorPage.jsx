"use strict";

import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] };
    }

    componentDidMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    render() {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />          
            </div>
        );
    }
}

module.exports = Authors;