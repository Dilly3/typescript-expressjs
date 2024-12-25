import dotenv from "dotenv"

dotenv.config()

class Config {
    private constructor(
        private readonly port: string,
        private readonly dbPort: number,
        private readonly dbHost: string,
        private readonly dbUser: string,
        private readonly dbPassword: string,
        private readonly dbName: string
    ) {}

    static fromEnv(): Config {
        return new Config(
            process.env.PORT ?? "7080",
            process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5433,
            process.env.DB_HOST ?? "postgres",
            process.env.DB_USER ?? "postgres",
            process.env.DB_PASSWORD ?? "postgres",
            process.env.DB_NAME ?? "todo_db"
        );
    }

    // Getters
    get getPort(): string { return this.port; }
    get getDbPort(): number { return this.dbPort; }
    get getDbHost(): string { return this.dbHost; }
    get getDbUser(): string { return this.dbUser; }
    get getDbPassword(): string { return this.dbPassword; }
    get getDbName(): string { return this.dbName; }
}

export const config = Config.fromEnv()




 