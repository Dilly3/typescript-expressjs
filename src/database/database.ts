import { DataSource } from "typeorm";
import {config} from "../config/config"
import {Task} from '../entity/task_entity'


export const AppDataSource = new DataSource({
type : 'postgres',
host : config.getDbHost,
port : config.getDbPort,
username : config.getDbUser,
password : config.getDbPassword,
database : config.getDbName,
entities : [
Task
],
synchronize: true,
logging: true
})


