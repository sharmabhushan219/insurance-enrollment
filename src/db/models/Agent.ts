import { sequelize } from '../sequelize.js';
import { DataTypes, Model } from "sequelize";

export class Agent extends Model {
    declare id: string;
    declare userId: string;
}

Agent.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },

        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'agents',
        timestamps: true,
    }
);
