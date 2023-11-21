import { FastifyInstance } from "fastify";
import { UserController } from "../controller/UserController";

export async function routes(router: FastifyInstance) {

    const controller = new UserController();

    router.get("/users", controller.listUser);

    router.post("/users", controller.createUser);
}