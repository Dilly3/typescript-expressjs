import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../database/database";
import { Task } from "../entity/task_entity";


export class TaskRepository {

    constructor(
        private taskRepo = AppDataSource.getRepository(Task),
    ){}

    public async getAll(): Promise<Task[]> {
        let allTasks : Task[]
        try {
            allTasks =  await this.taskRepo.find({
                order: {
                    date: 'ASC'
                }
            });
            return instanceToPlain(allTasks) as Task[]
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "unknown error"
            console.error('Failed to fetch tasks:', errorMessage);
            throw new Error('Failed to fetch tasks');
        }
    }
}
