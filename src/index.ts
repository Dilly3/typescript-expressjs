import express, { Express, Response } from "express";
import {config} from "./config/config"
import {AppDataSource} from "./database/database"


const app: Express = express();
const PORT = config.port ? config.port : "7080"

app.get("/", (_, res: Response) => {
  res.json("Hello World");
});

AppDataSource.initialize().then(() => {
    console.log("Connected to database successfully, GoodLuck!");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}).catch((err: Error) => {
    console.error("Database connection failed:", {
        message: err.message,
        details: err
    });
    process.exit(1); // Exit the process on database connection failure
});


