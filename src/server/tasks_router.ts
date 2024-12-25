import { Response } from 'express';


import {Router} from 'express';
import { TaskController } from '../controller/task_controller';


export const TaskRouter : Router = Router()

TaskRouter.get('/', async (_, res:Response) => {

    const taskController = new TaskController()
    const tasks = await taskController.getAllTasks()
    res.json(tasks)  
})