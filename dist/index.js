"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const database_1 = require("./database/database");
const app = (0, express_1.default)();
const PORT = config_1.config.port ? config_1.config.port : "7080";
app.get("/", (_, res) => {
    res.json("Hello World");
});
database_1.AppDataSource.initialize().then(() => {
    console.log("connected to database");
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}).catch((err) => {
    console.log("error connecting to database", err.message);
});
