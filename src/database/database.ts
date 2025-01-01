import { DataSource } from "typeorm";
import {Config} from "../config/config"
import {Task} from '../entity/task_entity'


export const AppDataSource = new DataSource({
type : 'postgres',
host : Config.dbHost,
port : Config.dbPort,
username : Config.dbUser,
password : Config.dbPassword,
database : Config.dbName,
entities : [
Task
],
synchronize: true,
logging: true
})


