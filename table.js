'use strict';

// Load Modules

const Hoek = require('hoek');

var format = require('pg-format');

exports = module.exports = class {

    constructor(name, db) {

        this.name = name;
        this.db = db;
    }

    async insert(rows) {

        if (!rows.length) {
            return;
        }

        const query = format(`INSERT INTO "${this.name}" (data) VALUES %L`, rows.map((r) => [r]))        

        await this.db.client.query(query);
    }

}
