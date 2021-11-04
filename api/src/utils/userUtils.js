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
}
