"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import { EventEmitter } from 'fbemitter';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

var _authors = [];

var emitter = new EventEmitter();

var _changeListener;

var AuthorStore = {
    addChangeListener: function (callback) {
        _changeListener = emitter.addListener(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        _changeListener.remove();
    },
    emitChange: function (callback) {
        emitter.emit(CHANGE_EVENT);
    },
    getAllAuthors: function () {
        return _authors;
    },
    getAuthorById: function (id) {
        return _.find(_authors, { id: id });
    }
};

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors, { id: action.author.id });
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthor, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function(author){
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;
        default:
    }
});

module.exports = AuthorStore;