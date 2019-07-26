const fs = require('fs');
require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME_DEV,
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME_TEST,
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME_PROD,
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};