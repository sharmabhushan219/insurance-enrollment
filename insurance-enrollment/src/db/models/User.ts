import {
  DataTypes,
  Model,
} from "sequelize";

// import type {InferAttributes, InferCreationAttributes} from "sequelize";

import { sequelize } from "../sequelize.js";

export class User extends Model{
  declare id: string;
  declare role: number;
  declare email: string;
  declare firstName: string;
  declare lastName: string;
  declare activityStatus: number;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    activityStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);