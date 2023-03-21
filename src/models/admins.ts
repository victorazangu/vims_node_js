import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Admin extends Model { }

Admin.init(
    {
        admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: "admins",
    }
);

Admin.sync();

export default Admin; 