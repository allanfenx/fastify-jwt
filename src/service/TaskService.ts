import { prisma } from "../connection/prisma";

type Task = {
    email: string,
    title: string,
    description: string
}

class TaskService {

    async createTask({ email, title, description }: Task) {

        const user = await prisma.user.findFirst({ where: { email } });

        const task = await prisma.task.create({
            data: {
                title,
                description,
                userId: user!.id
            }
        })

    }

    async listTask() {

        const tasks = await prisma.task.findMany();

        return tasks;
    }
}

export { TaskService }