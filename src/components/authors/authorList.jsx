"use strict";

import React from 'react';
import PropTypes from '../../../node_modules/prop-types';
import { Link } from 'react-router-dom';

class AuthorList extends React.Component {
    render() {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><Link to={{ pathname: 'authors/' + author.id }}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};

module.exports = AuthorList;