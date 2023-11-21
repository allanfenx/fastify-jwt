import fastify from "fastify";
import { routes } from "./routes/router";


const app = fastify();

app.register(routes);

app.listen({
    host: "0.0.0.0",
    port: 3000
}).then(() => console.log("aplications running"));