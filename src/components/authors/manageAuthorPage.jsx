"use strict";

import React from 'react';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/authorApi';
import { Router, Prompt } from 'react-router-dom';
import Toastr from 'toastr';

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    }

    componentWillMount() {
        const authorId = this.props.match.params.id;

        if (authorId) {
            this.setState({ author: AuthorApi.getAuthorById(authorId) });
        }
    }

    setAuthorState(event) {
        this.setState({ dirty: true });
        let field = event.target.name;
        let value = event.target.value;
        this.state.author[field] = value;
        this.setState({ author: this.state.author });
        this.authorFormIsValid();
    }

    authorFormIsValid() {
        let formIsValid = true;

        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;
    }

    saveAuthor(event) {
        this.setState({ dirty: false });
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        Toastr.success('Author saved.');
        this.props.history.push('/authors');
    }

    render() {
        return (
            <div>
                <Prompt when={this.state.dirty} message="Are you sure you want to leave?" />
                <AuthorForm author={this.state.author}
                    onChange={this.setAuthorState.bind(this)}
                    onSave={this.saveAuthor.bind(this)}
                    errors={this.state.errors} />
            </div>
        );
    }
}

module.exports = ManageAuthorPage;