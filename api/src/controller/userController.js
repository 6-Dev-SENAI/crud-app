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
      resp
        .status(404)
        .send(new Error(404, "Não há usuários registrado no sistema."));
    else {
      let respUsers = utils.toResponses(tableUsers);

      resp.status(200).send(respUsers);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

router.post("/cadastrar", async (req, resp) => {
  try {
    const userReq = req.body.user;

    let userTable = utils.toTable(userReq);

    userTable = await srv.createUser(userTable);

    if (userTable.id_usuario <= 0)
      resp
        .status(404)
        .send(new Error(404, "Ocorreu um erro ao tentar criar usuário."));
    else {
      let userResp = utils.toResponse(userTable);

      resp.status(200).send(userResp);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

router.put("/alterar/:id", async (req, resp) => {
  try {
    const userId = req.params.id || 0;
    const newUserReq = req.body.user;

    let oldUser = await srv.consultUserById(userId);

    if (!oldUser)
      resp
        .status(404)
        .send(new Error(404, `Usuário não cadastrado no sistema.`));
    else {
      const newUser = utils.toUpdateTable(newUserReq);

      oldUser = await srv.updateUser(oldUser, newUser);

      let userResp = utils.toResponse(oldUser);

      resp.status(200).send(userResp);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

router.delete("/deletar/:id", async (req, resp) => {
  try {
    const userId = req.params.id || 0;

    let user = await srv.consultUserById(userId);

    if (!user)
      resp
        .status(404)
        .send(new Error(404, `Usuário não cadastrado no sistema.`));
    else {
      await srv.deleteUser(userId);

      let userResp = utils.toResponse(user);

      resp.status(200).send(userResp);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

export default router;
