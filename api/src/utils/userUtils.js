import UserResponse from "../models/res/userResponse.js";

export default class UserUtils {
  toResponses(tableUsers) {
    let users = tableUsers.map((tableUser) => this.toResponse(tableUser));
    return users;
  }

  toResponse(tableUser) {
    const user = new UserResponse(
      tableUser._id,
      tableUser.nm_usuario,
      tableUser.nr_idade,
      tableUser.ds_sexo,
      tableUser.ds_login,
      tableUser.ds_senha
    );
    return user;
  }

  toTable(userReq) {
    const userTable = {
      nm_usuario: userReq.name || "",
      nr_idade: userReq.age || 0,
      ds_sexo: userReq.sex || "",
      ds_login: userReq.email || "",
      ds_senha: userReq.password || "",
    };
    return userTable;
  }

  toUpdateTable(userReq) {
    const userTable = {
      nm_usuario: userReq.name || "",
      nr_idade: userReq.age || 0,
      ds_sexo: userReq.sex || "",
      ds_login: userReq.email || "",
      ds_senha: userReq.password || "",
    };
    return userTable;
  }
}
