import Database from "./index.js";
const db = new Database();

import _sequelize from "sequelize";
const { Op } = _sequelize;

const { usuarioTb } = await db.getDB(false);

export default class UserDatabase {
  // GET
  
  async listUsers() {
    const resp = (await usuarioTb.findAll()).map((user) => user.dataValues);
    return resp;
  }

  async listUsersWithName(name) {
    const options = {
      where: {
        nm_usuario: {
          [Op.substring]: `%${name}%`,
        },
      },
    };

    const resp = (await usuarioTb.findAll(options)).map(
      (user) => user.dataValues
    );

    return resp;
  }

  // POST

  async createUser(user) {
    user = await usuarioTb.create(user);
    return user;
  }
}
