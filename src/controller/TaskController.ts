import { FastifyReply, FastifyRequest } from "fastify";
import { TaskService } from "../service/TaskService";

type Task = {
    email: string,
    title: string,
    description: string
}

class TaskController {

    async listTask(request: FastifyRequest, reply: FastifyReply) {

        const service = new TaskService();

        const task = await service.listTask()

        return reply.send(task);

    }

    async createTask(request: FastifyRequest, reply: FastifyReply) {

        const { email, title, description } = request.body as Task;

        const service = new TaskService();

        try {

            const task = await service.createTask({ email, title, description });

            return reply.status(201).send({ task });

        } catch (error: any) {

            return reply.status(400).send({ error: error.message });
        }
    }
}

export { TaskController }