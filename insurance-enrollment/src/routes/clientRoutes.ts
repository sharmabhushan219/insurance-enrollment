import { createAgent, createClient, getClients } from "../handlers/clientHandler.js";


export const clientRoutes = [
    {
        method: "GET",
        path: "/clients",
        handler: getClients,
    },
    {
        method: "POST",
        path: "/clients",
        handler: createClient,
    },
    {
        method: "POST",
        path: "/agents",
        handler: createAgent,
    }
];

