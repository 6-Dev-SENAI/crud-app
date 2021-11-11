import UserResponse from "../models/res/userResponse.js";

export default class UserUtils {
  toResponses(tableUsers, token) {
    let users = tableUsers.map((tableUser) =>
      this.toResponse(tableUser, token)
    );
    return users;
  }

  toResponse(tableUser, token) {
    const user = new UserResponse(
      tableUser._id,
      tableUser.nm_usuario,
      tableUser.nr_idade,
      tableUser.ds_sexo,
      tableUser.ds_login,
      tableUser.ds_senha,
      token
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
