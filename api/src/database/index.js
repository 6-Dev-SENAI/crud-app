import authenticateDB from "../models/_initModels.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("crud_db", "root", "Apolonio@01", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let db;
class Database {
  async connect(logging) {
    try {
      db = await authenticateDB(sequelize, logging);
      return db;
    } catch (error) {
      throw error;
    }
  }

  async getDB(logging) {
    const resp = await this.connect(logging);
    return resp;
  }
}

export default Database;
