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

  async consultUserById(userId) {
    const options = {
      where: {
        id_usuario: userId,
      },
    };

    const users = await usuarioTb.findAll(options);

    const user = users[0];

    return user;
  }

  // POST

  async createUser(user) {
    user = await usuarioTb.create(user);
    return user;
  }

  // PUT

  async updateUser(oldUser, newUser) {
    await usuarioTb.update(newUser, {
      where: { id_usuario: oldUser.id_usuario },
    });

    oldUser.nm_usuario = newUser.nm_usuario;
    oldUser.nr_idade = newUser.nr_idade;
    oldUser.ds_sexo = newUser.ds_sexo;

    return oldUser;
  }

  // DELETE

  async deleteUser(userId) {
    await usuarioTb.destroy({
      where: { id_usuario: userId },
    });

    return null;
  }
}
