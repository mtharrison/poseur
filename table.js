'use strict';

// Load Modules

const MongoClient = require('mongodb').MongoClient;


exports = module.exports = class {

    constructor(db, name) {

        this.collection = db.collection(name);
    }
}
