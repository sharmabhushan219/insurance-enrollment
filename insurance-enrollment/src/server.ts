import { sequelize } from "./db/sequelize.js";
import Hapi, { server } from "@hapi/hapi";
import "./db/models/index.js";
import { createAgent, createClient, getClients } from "./handlers/clientHandler.js";
import { clientRoutes } from "./routes/clientRoutes.js";

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        await sequelize.sync();
        console.log("Database synchronized successfully.");

         const server = Hapi.server({
            port: 3000,
            host: "localhost",
            routes: {
                cors: {
                    origin: ["http://localhost:5173"],
                },
            },
        })

        server.route({
            method: "GET",
            path: "/health",
            handler: (request, h) => {
                return {
                    status: "ok"
                }
            }
        });

        server.route(clientRoutes);
        
        await server.start();
        console.log(`server running on ${server.info.uri}`)

    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
};



start();