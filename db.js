'use strict';

// Load Modules

const { Client } = require('pg')

const Table = require('./table');

exports = module.exports = class {

    constructor(name, options) {

        this.name = name;
        this.options = options;
        this.client = new Client({
            user: 'postgres',
            password: 'password',
            database: this.name
        });

        this.tables = {};

        this._connected = false;
    }

    async connect() {

        await this.client.connect();
        this._connected = true;
    }

    async close() {

    }

    table(tables, options) {

        if (!typeof tables === 'string' &&
            !Array.isArray(tables)) {
            tables = Object.keys(tables);
        }

        tables = [].concat(tables);

        tables.forEach((name) => {

            const table = new Table(name, this);
            this[name] = table;
            this.tables[name] = table;
        });
    }

    async establish(tables) {

        if (!this._connected) {
            await this.connect();
        }

        const tableList = Object.keys(tables);

        for (const table of tableList) {

            const res = await this.client.query(`CREATE TABLE IF NOT EXISTS "${table}" (
                data JSONB,
                id SERIAL PRIMARY KEY
            )`);
        }

        return;
    }
}
