import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(
    "insurance_enrollment",
    "root",
    "",
    {
        host:"localhost",
        dialect: "mysql",
        logging: console.log,
    }
);
