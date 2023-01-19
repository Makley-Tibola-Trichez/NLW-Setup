import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import { fastify } from "fastify";
import { appRoutes } from "./routes.js";

const app = fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running on port 3333");
  });
