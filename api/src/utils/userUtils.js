import UserResponse from "../models/res/userResponse.js";

export default class UserUtils {
  toResponses(tableUsers) {
    let users = tableUsers.map((tableUser) => this.toResponse(tableUser));
    return users;
  }

  toResponse(tableUser) {
    const user = new UserResponse(
      tableUser.id_usuario,
      tableUser.nm_usuario,
      tableUser.nr_idade,
      tableUser.ds_sexo
    );
    return user;
  }

  toTable(userReq) {
    const userTable = {
      id_usuario: 0,
      nm_usuario: userReq.name || "",
      nr_idade: userReq.age || 0,
      ds_sexo: userReq.sex || ""
    }
    return userTable;
  }
}
