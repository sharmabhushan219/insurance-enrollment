import { sequelize } from '../sequelize.js';
import { Model, DataTypes } from "sequelize";
export class ClientPolicy extends Model {
    declare id: string;
    declare clientId: string;
}

ClientPolicy.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },

    clientId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'ClientPolicy',
    tableName: 'client_policies',
    timestamps: true
})