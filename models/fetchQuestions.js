'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fetchQuestion = mongoose.Schema({
    id: String,
    Questions: Object
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rpqb:rpqb123@ds131583.mlab.com:31583/digitalid', { useMongoClient: true });

module.exports = mongoose.model('fetchQuestion', fetchQuestion);
