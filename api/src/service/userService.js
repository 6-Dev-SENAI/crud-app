import UserDatabase from "../database/userDatabase.js";
const db = new UserDatabase();

export default class UserService {
  async listUsers(name) {
    if (name === "") return db.listUsers();
    else return db.listUsersWithName(name);
  }
}
