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
        default:
    }
});

module.exports = AuthorStore;