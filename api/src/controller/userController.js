import { Router } from "express";
import UserService from "../service/userService.js";
import UserUtils from "../utils/userUtils.js";
import Error from "../models/res/errorModel.js";

const router = Router();
const srv = new UserService();
const utils = new UserUtils();

router.get("/", async (req, resp) => {
  try {
    const name = req.query.name || "";

    let tableUsers = await srv.listUsers(name);

    if (tableUsers.length === 0)
      resp.send(new Error(404, "Não há usuários registrado no sistema."));
    else {
      let respUsers = utils.toResponses(tableUsers);

      resp.send(respUsers);
    }
  } catch (error) {
    resp.send(new Error(400, error));
  }
});

router.post("/cadastrar", async (req, resp) => {
  try {
    const userReq = req.body.user;

    let userTable = utils.toTable(userReq);

    userTable = await srv.createUser(userTable);
    
    if (userTable.id_usuario <= 0) resp.send(new Error(404, "Ocorreu um erro ao tentar criar usuário."));
    else {
      let userResp = utils.toResponse(userTable);

      resp.send(userResp);
    }
  } catch (error) {
    resp.send(new Error(400, error))
  }
})

export default router;
