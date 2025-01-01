import { Task } from "src/entity/task_entity";
import { TaskRepository } from "../repository/tasks_repo";


export class TaskController{
    constructor(
        private repo = new TaskRepository(),
    ){}

    public async getAllTasks(): Promise<Task[]>{
        return await this.repo.getAll()
        
    }
    public async saveTask(task : Task) : Promise<Task>{
        return await this.repo.saveTask(task)
    }
}