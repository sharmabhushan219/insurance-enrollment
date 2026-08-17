import {sequelize} from "./db/sequelize.js";
import Hapi from "@hapi/hapi";

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        const server = Hapi.server({
            port: 3000,
            host: "localhost",
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
        await server.start();
        console.log(`server running on ${server.info.uri}`)
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
};

start();