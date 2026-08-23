import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(
    "insurance_enrollment",
    "root",
    "#saRika9673",
    {
        host:"localhost",
        dialect: "mysql",
        logging: console.log,
    }
);