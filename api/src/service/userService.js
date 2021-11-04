import UserDatabase from "../database/userDatabase.js";
const db = new UserDatabase();

export default class UserService {
  // GET

  async listUsers(name) {
    if (name === "") return db.listUsers();
    else return db.listUsersWithName(name);
  }

  async consultUserById(userId) {
    if (userId <= 0) throw "Usuário não está cadastrado no sistema!";

    const user = await db.consultUserById(userId);

    return user;
  }

  // POST

  async createUser(user) {
    this.#verifyUser(user);
    user = db.createUser(user);
    return user;
  }

  #verifyUser(user) {
    if (user.nm_usuario === "") throw "Insira um nome diferente de vazio!";
    if (user.nr_idade < 0 || user.nr_idade > 120)
      throw "Insira uma idade entre 0 e 120!";
    if (user.ds_sexo !== "F" && user.ds_sexo !== "M")
      throw "Escolha o sexo entre Feminino ou Masculino.";
  }

  // PUT

  async updateUser(oldUser, newUser) {
    this.#verifyUser(newUser);

    oldUser = await db.updateUser(oldUser, newUser);
    return oldUser;
  }

  // DELETE

  async deleteUser(userId) {
    if (userId <= 0) throw "Usuário já não está cadastrado no sistema!";

    return await db.deleteUser(userId);
  }
}
