import express, { Express, Response } from "express";
import {config} from "./config/config"
import {AppDataSource} from "./database/database";
import bodyParser from "body-parser";
import Cors from 'cors'
import { TaskRouter } from "./server/tasks_router";



const app: Express = express();

app.use(bodyParser.json())

app.use(Cors())
app.use('/tasks', TaskRouter)



const PORT = config.getPort ? config.getPort : "7080"

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


