"use strict";

import React from 'react';
import PropTypes from '../../../node_modules/prop-types';
import { Link } from 'react-router-dom';
import AuthorActions from '../../actions/authorActions';
import Toastr from 'toastr';

class AuthorList extends React.Component {
    deleteAuthor(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        Toastr.success('Author Deleted');
    }

    render() {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>DELETE</a></td>
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
                            <th></th>
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