import { User } from "./User.js";
import { Agent } from "./Agent.js";
import { Client } from "./Client.js";
import { ClientPolicy } from "./ClientPolicy.js";
import { Enrollment } from "./Enrollment.js";


// Agent → Client
Agent.hasMany(Client, {
    foreignKey: "agentId",
});

Client.belongsTo(Agent, {
    foreignKey: "agentId",
});