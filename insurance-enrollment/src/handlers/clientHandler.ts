import type { Request, ResponseToolkit } from "@hapi/hapi";
import { Agent } from "../db/models/Agent.js";
import { Client } from "../db/models/Client.js";

export const getClients = async () => {
    const clients = await Client.findAll();
    return clients;
}

export const createClient = async (request: Request, h: ResponseToolkit) => {
    try {
        const payload = request?.payload as {
            id: string;
            userId: string;
            agentId: string;
        };

        const client = await Client.create({ id: payload.id, userId: payload.userId, agentId: payload.agentId });
        return h.response(client).code(201);
    } catch (error) {
        console.error("Error creating client:", error);
        return h.response(error).code(500);
    }
}

export const createAgent = async (request: any, h: any) => {
    try {
        const { id, userId } = request.payload;

        const agent = await Agent.create({ id, userId });
        return h.response(agent).code(201);
    } catch (error) {
        console.error("Error creating client:", error);
        return h.response(error).code(500);
    }
}