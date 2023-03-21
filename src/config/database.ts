import { Sequelize } from "sequelize";

const host = "localhost";
const user ="victor";
const database = "vims_express";
const password ="root";
const port = 5432;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

export default sequelize;