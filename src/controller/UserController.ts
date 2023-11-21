import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../service/UserService";

type User = {
    name: string;
    email: string;
    password: string;
}

class UserController {

    async createUser(request: FastifyRequest, reply: FastifyReply) {

        const { name, email, password } = request.body as User;

        const service = new UserService();

        try {

            await service.createUser({ name, email, password });

            return reply.status(201).send({ response: "User create success!" });
        } catch (error: any) {

            return reply.status(400).send({ error: error.message });
        }
    }

    async listUser(request: FastifyRequest, reply: FastifyReply) {

        const service = new UserService();

        const users = await service.listUsers();

        return reply.send(users);
    }
}

export { UserController }