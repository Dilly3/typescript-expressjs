"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config/config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: config_1.config.dbhost,
    port: config_1.config.dbport,
    username: config_1.config.dbuser,
    password: config_1.config.dbPassword,
    database: config_1.config.dbname,
    synchronize: true,
    logging: true,
    connectTimeout: 20000, // 30 seconds
    extra: {
        connectionLimit: 5
    },
});
