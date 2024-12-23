import { DataSource } from "typeorm";
import {config} from "../config/config"

export const AppDataSource = new DataSource({
type : 'postgres',
host : config.dbhost,
port : config.dbport,
username : config.dbuser,
password : config.dbPassword,
database : config.dbname,

})
