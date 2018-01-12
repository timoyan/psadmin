"use strict";

import React from 'react';
import AuthorList from './authorList';
import AuthorStore from '../../stores/authorStore';
import { Prompt, Link } from 'react-router-dom';

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] };
    }

    componentWillMount(){
        AuthorStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount(){
        AuthorStore.removeChangeListener(this._onChange.bind(this));
    }

    componentDidMount() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    }

    _onChange() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
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