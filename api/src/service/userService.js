import UserDatabase from "../database/userDatabase.js";
const db = new UserDatabase();

import mongoose from "mongoose";

export default class UserService {
  // GET

  async listUsers(name) {
    if (name === "") return db.listUsers();
    else return db.listUsersWithName(name);
  }

  async consultUserById(userId) {
    if (!mongoose.isValidObjectId(userId))
      throw "Usuário não está cadastrado no sistema!";

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
    this.#verifyLogin(user.ds_login, user.ds_senha);
  }

  #verifyLogin(email, password) {
    if (email === "") throw "Por favor, preencha o email.";
    if (!email.includes("@"))
      throw "Por favor, insira um formato de email válido!";
    let at = email.indexOf("@");
    let com = email.indexOf(".com", at);
    if (com < at || com === -1) throw "Por favor, insira um email válido!";

    if (password === "") throw "Por favor, preencha a senha.";
  }

  // PUT

  async updateUser(user, newUser) {
    this.#verifyUser(newUser);

    const { retorno, oldUser } = await db.updateUser(user, newUser);

    if (retorno.modifiedCount === 0)
      throw "Ocorreu um erro ao tentar alterar o usuário.";

    oldUser.nm_usuario = newUser.nm_usuario;
    oldUser.nr_idade = newUser.nr_idade;
    oldUser.ds_sexo = newUser.ds_sexo;
    oldUser.ds_login = newUser.ds_login;
    oldUser.ds_senha = newUser.ds_senha;

    return oldUser;
  }

  // DELETE

  async deleteUser(userId) {
    if (!mongoose.isValidObjectId(userId))
      throw "Usuário já não está cadastrado no sistema!";

    const resp = await db.deleteUser(userId);

    if (resp.deletedCount === 0)
      throw "Ocorreu um erro ao tentar deletar o usuário.";

    return resp;
  }

  // LOGIN

  async login(email, password) {
    this.#verifyLogin(email, password);

    const resp = await db.login(email, password);

    return resp;
  }
}
