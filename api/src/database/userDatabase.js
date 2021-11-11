import Usuario from "../models/userModel.js";

export default class UserDatabase {
  // GET

  async listUsers() {
    const resp = await Usuario.find().exec();
    return resp;
  }

  async listUsersWithName(name) {
    const options = { nm_usuario: { $regex: name, $options: "i" } };

    const resp = await Usuario.find(options);

    return resp;
  }

  async consultUserById(userId) {
    const user = await Usuario.findById(userId);

    return user;
  }

  // POST

  async createUser(user) {
    user = await Usuario.create(user);
    return user;
  }

  // PUT

  async updateUser(oldUser, newUser) {
    const resp = await Usuario.replaceOne({ _id: oldUser._id }, newUser);

    return {
      retorno: resp,
      oldUser,
    };
  }

  // DELETE

  async deleteUser(userId) {
    const resp = await Usuario.deleteOne({ _id: userId });

    return resp;
  }

  // LOGIN

  async login(email, password) {
    const options = {
      ds_login: email,
      ds_senha: password,
    };

    const resp = await Usuario.findOne(options);

    return resp;
  }
}
