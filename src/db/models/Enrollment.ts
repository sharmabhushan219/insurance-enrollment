import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";
import { EnrollmentStatus } from "../../constants/enrollment.js";

export class Enrollment extends Model {
  declare id: string;
  declare clientId: string;
  declare clientPolicyId: string;

  declare status: EnrollmentStatus;
  declare subStatus: string | null;
  declare docusignStatus: string | null;

  declare startedAt: Date | null;
  declare completedAt: Date | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Enrollment.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    clientId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    clientPolicyId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    status: {
      type: DataTypes.ENUM(...Object.values(EnrollmentStatus)),
      allowNull: false,
      defaultValue: EnrollmentStatus.DRAFT,
    },

    subStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    docusignStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    startedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    completedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "enrollments",
    timestamps: true,
  }
);