import { hash } from "bcrypt";
import { prisma } from "../connection/prisma";

type User = {
    name: string;
    email: string;
    password: string;
}

class UserService {

    async createUser({ name, email, password }: User) {

        const userAlreadyExist = await prisma.user.findFirst({ where: { email } });

        if (userAlreadyExist) throw Error("User already exist");

        const hasPassword = await hash(password, 10);

        await prisma.user.create({
            data: {
                email,
                name,
                password: hasPassword
            }
        })
    }

    async listUsers() {

        const users = await prisma.user.findMany();

        return users;
    }
}

export { UserService }