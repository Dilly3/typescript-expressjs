import dotenv from "dotenv"

dotenv.config()


export class Config {

    static port : string
    static dbPort : number
    static dbHost: string
    static dbUser: string
    static dbPassword: string
    static dbName: string


    static {
        Config.port = process.env.PORT ?? "7080",
       Config.dbPort =  parseInt(process.env.DB_PORT ?? '5433'),
          Config.dbHost =  process.env.DB_HOST ?? 'postgres',
            Config.dbUser = process.env.DB_USER ?? 'postgres',
            Config.dbPassword = process.env.DB_PASSWORD ?? 'postgres',
            Config.dbName = process.env.DB_NAME ?? 'todo_db'
    }

}







 