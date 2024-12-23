"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT ? process.env.PORT : "7080",
    dbport: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    dbuser: process.env.DB_USER ? process.env.DB_USER : "",
    dbhost: process.env.DB_HOST ? process.env.DB_HOST : "",
    dbPassword: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
    dbname: process.env.DB_NAME ? process.env.DB_NAME : ""
};
