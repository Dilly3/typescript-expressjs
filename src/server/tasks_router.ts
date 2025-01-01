import { Request, Response } from 'express';


import {Router} from 'express';
import { TaskController } from '../controller/task_controller';
import { createValidator,getErrorMessages } from './validator/create_validator';
import { createBody } from 'src/entity/create_body';
import { Result, ValidationError, validationResult } from 'express-validator';
import {plainToInstance } from 'class-transformer';
import { Task } from '../entity/task_entity';
import { v4 as uuidv4 } from 'uuid';


export const TaskRouter : Router = Router()
var taskController = new TaskController()

TaskRouter.get('/', async (_, res:Response) => {
    const tasks = await taskController.getAllTasks()
    res.json(tasks)  
})

TaskRouter.post('/', createValidator, async (req : Request<{},{},createBody>, res:Response) : Promise<any> => {
    const errors : Result<ValidationError> = validationResult(req)
    const messages = getErrorMessages(errors)

    if (messages) {
        return res.status(400).json({errors : messages})
    }
// create task instance
    const taskInstance = plainToInstance(Task, {
        id: uuidv4(),
        date: req.body.date,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        title: req.body.title
    });
   try {
    const savedTask = await taskController.saveTask(taskInstance)
    return res.json({"task" : savedTask})
   }catch(err){
    if (err instanceof Error) {
        return res.status(500).json({error : err.message}) 
    }
    return res.status(500).json({error : err})

   }
   
})