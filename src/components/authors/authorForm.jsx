"use strict";

import React from 'react';
import Input from '../common/textinput';
import PropTypes from '../../../node_modules/prop-types';


class AuthorForm extends React.Component {
    render() {
        return (
            <form>
                <h1>Manage Author</h1>

                <Input
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    placeholder="First Name"
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName} />

                <Input
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    placeholder="Last Name"
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave.bind(this)} />
            </form>
        );
    }
}

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};

module.exports = AuthorForm;