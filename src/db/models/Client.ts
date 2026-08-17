import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";
export class Client extends Model {
    declare id: string;
    declare userId: string;
    declare agentId: string;
}

Client.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },

    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    agentId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: "client",
        timestamps: true,
    })