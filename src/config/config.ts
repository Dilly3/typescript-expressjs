import dotenv from "dotenv"

dotenv.config()
type Config = {
    port : string
    dbport : number
    dbhost : string
    dbuser : string
    dbPassword : string
    dbname : string


}

export const config : Config = {
    port : process.env.PORT ? process.env.PORT : "7080",
    dbport : process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5433,
    dbuser : process.env.DB_USER ? process.env.DB_USER : "postgres",
    dbhost : process.env.DB_HOST ? process.env.DB_HOST : "postgres",
    dbPassword : process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "postgres",
    dbname : process.env.DB_NAME ? process.env.DB_NAME : "todo_db"
    

}



 